> chi_sim tessdata

# @tessdata/chi_sim

## Installation

```
npm install @tessdata/chi_sim
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/chi_sim');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'chi_sim'
});
```
