> /*<language>*/ tessdata

# @tessdata//*<language>*/

## Installation

```
npm install @tessdata//*<language>*/
```

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata//*<language>*/');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: '/*<language>*/'
});
```
