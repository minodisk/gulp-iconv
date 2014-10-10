# [gulp](http://gulpjs.com)-iconv [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![dependencies][dependencies-image]][dependencies-url] [![dev dependencies][dev-dependencies-image]][dev-dependencies-url]

> Run [ashtuchkin/iconv-lite](https://github.com/ashtuchkin/iconv-lite) and translate encoding.

*Iconv in gulp.*

## Install

```bash
$ npm install --save-dev gulp-iconv
```

## Usage

```js
var gulp = require('gulp');
var iconv = require('gulp-iconv');

gulp.task('default', function () {
  return gulp.src('index.html')
    .pipe(iconv({
      decoding: 'euc_jp',
      encoding: 'shift_jis'
    }));
});
```

## API

### iconv(options)

#### options

##### decoding

Type: `string`
Default: `'utf8'`

The encoding of input stream. See [Supported encodings](https://github.com/ashtuchkin/iconv-lite#supported-encodings).

##### encoding

Type: `string`
Default: `'utf8'`

The encoding of output stream. See [Supported encodings](https://github.com/ashtuchkin/iconv-lite#supported-encodings).


[npm-image]: http://img.shields.io/npm/v/gulp-iconv.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gulp-iconv
[travis-image]: http://img.shields.io/travis/minodisk/gulp-iconv.svg?style=flat-square
[travis-url]: http://travis-ci.org/minodisk/gulp-iconv
[coveralls-image]: https://img.shields.io/coveralls/minodisk/gulp-iconv.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/minodisk/gulp-iconv
[dependencies-image]: http://img.shields.io/david/minodisk/gulp-iconv.svg?style=flat-square
[dependencies-url]: https://david-dm.org/minodisk/gulp-iconv
[dev-dependencies-image]: http://img.shields.io/david/dev/minodisk/gulp-iconv.svg?style=flat-square
[dev-dependencies-url]: https://david-dm.org/minodisk/gulp-iconv#info=devDependencies
