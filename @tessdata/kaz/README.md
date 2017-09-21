> kaz tessdata

# @tessdata/kaz

## Installation

```
npm install @tessdata/kaz
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/kaz');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'kaz'
});
```
