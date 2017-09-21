> tgk tessdata

# @tessdata/tgk

## Installation

```
npm install @tessdata/tgk
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/tgk');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'tgk'
});
```
