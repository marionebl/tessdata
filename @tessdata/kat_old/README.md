> kat_old tessdata

# @tessdata/kat_old

## Installation

```
npm install @tessdata/kat_old
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/kat_old');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'kat_old'
});
```
