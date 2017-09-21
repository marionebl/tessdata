> collection-all tessdata

# @tessdata/collection-all

## Installation

```
npm install @tessdata/collection-all
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/collection-all');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'collection-all'
});
```
