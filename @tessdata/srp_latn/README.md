> srp_latn tessdata

# @tessdata/srp_latn

## Installation

```
npm install @tessdata/srp_latn
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/srp_latn');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'srp_latn'
});
```
