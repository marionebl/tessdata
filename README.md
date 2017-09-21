> tessdata for consumption via npm

# @tessdata

* 📦 Install Tesseract training data via npm 
* 📖 Obtain the `langPath` easily
* 🚀 Pull in just what you need

## Usage

```js
const sander = require('@marionebl/sander');
const Tesseract = require('tesseract.js');
const {langPath} = require('@tessdata/eng');

const image = sander.readFile('some-image.png');
const tesseract = Tesseract.create({langPath});

tesseract.recognize(buffer, {
  lang: 'eng'
});
```

## Available languages

```
tessdata update --tag 3.04.00
tessdata list --langs
```

* @tessdata/afr
* @tessdata/amh
* @tessdata/ara
* @tessdata/asm
* @tessdata/aze_cyrl
* @tessdata/aze
* @tessdata/bel
* @tessdata/ben
* @tessdata/bod
* @tessdata/bos
* @tessdata/bul
* @tessdata/cat
* @tessdata/ceb
* @tessdata/ces
* @tessdata/chi_sim
* @tessdata/chi_tra
* @tessdata/chr
* @tessdata/cym
* @tessdata/dan_frak
* @tessdata/dan
* @tessdata/deu_frak
* @tessdata/deu
* @tessdata/dzo
* @tessdata/ell
* @tessdata/eng
* @tessdata/enm
* @tessdata/epo
* @tessdata/equ
* @tessdata/est
* @tessdata/eus
* @tessdata/fas
* @tessdata/fin
* @tessdata/fra
* @tessdata/frk
* @tessdata/frm
* @tessdata/gle
* @tessdata/glg
* @tessdata/grc
* @tessdata/guj
* @tessdata/hat
* @tessdata/heb
* @tessdata/hin
* @tessdata/hrv
* @tessdata/hun
* @tessdata/iku
* @tessdata/ind
* @tessdata/isl
* @tessdata/ita_old
* @tessdata/ita
* @tessdata/jav
* @tessdata/jpn
* @tessdata/kan
* @tessdata/kat_old
* @tessdata/kat
* @tessdata/kaz
* @tessdata/khm
* @tessdata/kir
* @tessdata/kor
* @tessdata/kur
* @tessdata/lao
* @tessdata/lat
* @tessdata/lav
* @tessdata/lit
* @tessdata/mal
* @tessdata/mar
* @tessdata/mkd
* @tessdata/mlt
* @tessdata/msa
* @tessdata/mya
* @tessdata/nep
* @tessdata/nld
* @tessdata/nor
* @tessdata/ori
* @tessdata/osd
* @tessdata/pan
* @tessdata/pol
* @tessdata/por
* @tessdata/pus
* @tessdata/ron
* @tessdata/rus
* @tessdata/san
* @tessdata/sin
* @tessdata/slk_frak
* @tessdata/slk
* @tessdata/slv
* @tessdata/spa_old
* @tessdata/spa
* @tessdata/sqi
* @tessdata/srp_latn
* @tessdata/srp
* @tessdata/swa
* @tessdata/swe
* @tessdata/syr
* @tessdata/tam
* @tessdata/tel
* @tessdata/tgk
* @tessdata/tgl
* @tessdata/tha
* @tessdata/tir
* @tessdata/tur
* @tessdata/uig
* @tessdata/ukr
* @tessdata/urd
* @tessdata/uzb_cyrl
* @tessdata/uzb
* @tessdata/vie
* @tessdata/yid

## Available collections

```
tessdata update --tag 3.04.00
tessdata list --collections
```

* @tessdata/collection-all

## Related

* [naptha/tesseract.js](https://github.com/naptha/tesseract.js#tesseractjs)
* [tesseract-ocr/tessdata](https://github.com/tesseract-ocr/tessdata)

## License

@tessdata is licensed under the Apache License 2.0
