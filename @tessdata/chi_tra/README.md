> chi_tra tessdata

# @tessdata/chi_tra

## Installation

```
npm install @tessdata/chi_tra
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/chi_tra');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'chi_tra'
});
```
