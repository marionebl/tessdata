> mal tessdata

# @tessdata/mal

## Installation

```
npm install @tessdata/mal
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/mal');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'mal'
});
```
