> mkd tessdata

# @tessdata/mkd

## Installation

```
npm install @tessdata/mkd
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/mkd');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'mkd'
});
```
