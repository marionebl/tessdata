> kur tessdata

# @tessdata/kur

## Installation

```
npm install @tessdata/kur
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/kur');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'kur'
});
```
