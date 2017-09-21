> slk_frak tessdata

# @tessdata/slk_frak

## Installation

```
npm install @tessdata/slk_frak
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/slk_frak');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'slk_frak'
});
```
