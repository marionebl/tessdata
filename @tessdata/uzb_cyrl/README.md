> uzb_cyrl tessdata

# @tessdata/uzb_cyrl

## Installation

```
npm install @tessdata/uzb_cyrl
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/uzb_cyrl');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'uzb_cyrl'
});
```
