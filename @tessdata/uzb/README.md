> uzb tessdata

# @tessdata/uzb

## Installation

```
npm install @tessdata/uzb
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/uzb');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'uzb'
});
```
