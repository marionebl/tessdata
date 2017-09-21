> vie tessdata

# @tessdata/vie

## Installation

```
npm install @tessdata/vie
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/vie');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'vie'
});
```
