> aze_cyrl tessdata

# @tessdata/aze_cyrl

## Installation

```
npm install @tessdata/aze_cyrl
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/aze_cyrl');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'aze_cyrl'
});
```
