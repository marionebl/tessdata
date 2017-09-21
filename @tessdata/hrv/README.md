> hrv tessdata

# @tessdata/hrv

## Installation

```
npm install @tessdata/hrv
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/hrv');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'hrv'
});
```
