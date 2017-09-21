> deu_frak tessdata

# @tessdata/deu_frak

## Installation

```
npm install @tessdata/deu_frak
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/deu_frak');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'deu_frak'
});
```
