> spa_old tessdata

# @tessdata/spa_old

## Installation

```
npm install @tessdata/spa_old
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/spa_old');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'spa_old'
});
```
