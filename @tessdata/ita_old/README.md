> ita_old tessdata

# @tessdata/ita_old

## Installation

```
npm install @tessdata/ita_old
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/ita_old');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'ita_old'
});
```
