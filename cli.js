const path = require('path');
const execa = require('execa');
const globby = require('globby');
const meow = require('meow');
const ora = require('ora');
const sander = require('@marionebl/sander');
const Repository = require('lerna/lib/Repository');
const throat = require('throat');
const zlib = require('zlib');

main(meow(`
  Usage
    $ tessdata [command]

  Commands
    update - Update tessdata packages from ./traineddata directory
    list - Get available tessdata packages as markdown list

`)).catch(err => {
  throw err;
});

async function main(cli) {
  const [cmd] = cli.input;

  if (typeof cmd !== 'string') {
    console.log('Missing required parameter [command]');
    return cli.showHelp(1);
  }

  switch (cmd) {
    case 'list':
      return await list(cli);
    case 'update':
      return await update(cli);
    default: {
      console.log(`Unknow command ${cmd}`);
      cli.showHelp(1);
    }
  }
}

async function list(cli) {
  const pkgs = listPackages({
    all: !cli.flags.collections && !cli.flags.langs,
    langs: cli.flags.langs,
    collections: cli.flags.collections
  });

  pkgs.forEach(p => {
    console.log('*', p);
  });
}

function listPackages(options) {
  const repo = new Repository(__dirname);

  if (options.all) {
    return repo.packages.map(pkg => pkg.name);
  }

  const pkgs = repo.packages.filter(pkg => {
    if (options.collections && pkg.name.startsWith('@tessdata/collection-')) {
      return true;
    }
    if (options.langs && !pkg.name.startsWith('@tessdata/collection-')) {
      return true;
    }
    return false;
  });

  return pkgs.map(pkg => pkg.name);
}

async function update(cli) {
  const spinner = ora('Finding trained data ...').start();

  if (!(await sander.exists('traineddata'))) {
    spinner.text = 'Fetching trained data. This may take a while ...';
    spinner.stopAndPersist();
    await execa('git', ['clone', 'https://github.com/tesseract-ocr/tessdata.git', 'traineddata'], {stdio: 'inherit'});
    spinner.start();
  }

  if (cli.flags.tag) {
    spinner.text = `Checking out ${cli.flags.tag}`;
    spinner.stopAndPersist();
    await execa('git', ['checkout', cli.flags.tag], {stdio: 'inherit', cwd: './traineddata'});
    spinner.start();
  }

  const files = await globby(['*.traineddata'], {cwd: './traineddata'});
  const langs = files.map(f => path.basename(f, '.traineddata'));

  await sander.mkdir('@tessdata');

  spinner.text = 'Loading templates ...';

  const template = await Promise.all((await globby(['**/*'], {cwd: 'template'}))
    .map(async (file) => ({
      file,
      contents: String(await sander.readFile('template', file))
    })));

  await Promise.all(langs.map(throat(1, async lang => {
    spinner.text = `Creating package @tessdata/${lang}`;
    await createPackage(lang, [lang], template);
  })));

  spinner.text = `Creating collection @tessdata/collection-all`;
  await createPackage('collection-all', langs, template);

  spinner.text = 'Done updating';

  setTimeout(() => {
    spinner.stopAndPersist();
  }, 1000);
}

async function createPackage(lang, languages, template) {
  const pkgRoot = `@tessdata/${lang}`;
  await sander.mkdir(pkgRoot);

  const patterns = languages.map(l => `${l}.*`);
  const files = await globby(patterns, {cwd: './traineddata'});

  await Promise.all(files.map(async file => {
    const input = await sander.readFile('./traineddata', file);
    await sander.writeFile(pkgRoot, `${file}.gz`, await compress(input));
  }));

  await Promise.all(template.map(async t => {
    const substituted = substitute(t, {language: lang, languages});
    sander.writeFile(pkgRoot, t.file, Buffer.from(substituted));
  }));
}

function substitute(file, data) {
  return Object.entries(data)
    .reduce((result, entry) => {
      const [key, value] = entry;

      const replacement = path.extname(file.file) === '.js'
        ? JSON.stringify(value)
        : value;

      const replaced = result.split(`/*<${key}>*/`).join(replacement);
      return replaced;
    }, file.contents);
}

function compress(file) {
  return new Promise((resolve, reject) => {
    zlib.gzip(file, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}
