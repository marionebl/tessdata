> dzo tessdata

# @tessdata/dzo

## Installation

```
npm install @tessdata/dzo
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/dzo');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'dzo'
});
```
