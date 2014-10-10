# [gulp](http://gulpjs.com)-html-rebuild [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![dependencies][dependencies-image]][dependencies-url] [![dev dependencies][dev-dependencies-image]][dev-dependencies-url]

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


[npm-url]: https://npmjs.org/package/gulp-html-rebuild
[npm-image]: https://badge.fury.io/js/gulp-html-rebuild.svg
[travis-url]: http://travis-ci.org/minodisk/gulp-html-rebuild
[travis-image]: https://secure.travis-ci.org/minodisk/gulp-html-rebuild.svg?branch=master
[coveralls-image]: https://img.shields.io/coveralls/minodisk/gulp-html-rebuild.svg
[coveralls-url]: https://coveralls.io/r/minodisk/gulp-html-rebuild
[dependencies-image]: http://img.shields.io/david/trymore/pencil.svg?style=flat-square
[dependencies-url]: https://david-dm.org/trymore/pencil
[dev-dependencies-image]: http://img.shields.io/david/dev/trymore/pencil.svg?style=flat-square
[dev-dependencies-url]: https://david-dm.org/trymore/pencil#info=devDependencies
