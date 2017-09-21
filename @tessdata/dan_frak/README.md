> dan_frak tessdata

# @tessdata/dan_frak

## Installation

```
npm install @tessdata/dan_frak
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/dan_frak');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'dan_frak'
});
```
