> bod tessdata

# @tessdata/bod

## Installation

```
npm install @tessdata/bod
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/bod');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'bod'
});
```
