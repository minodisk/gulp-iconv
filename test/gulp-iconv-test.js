// Generated by CoffeeScript 1.8.0
(function() {
  var File, bufEq, iconv, join, readFileSync, shift_jis, utf8;

  require('chai').should();

  File = require('gulp-util').File;

  iconv = require('../lib/gulp-iconv');

  join = require('path').join;

  readFileSync = require('fs').readFileSync;

  bufEq = require('buffer-equal');

  shift_jis = readFileSync(join(__dirname, 'fixtures/shift_jis.txt'));

  utf8 = readFileSync(join(__dirname, 'fixtures/utf8.txt'));

  describe('gulp-iconv', function() {
    return describe('buffer mode', function() {
      it('should translate utf8 to utf8', function(done) {
        var stream;
        stream = iconv();
        stream.on('data', function(file) {
          return bufEq(file.contents, utf8).should.be["true"];
        });
        stream.on('end', done);
        stream.write(new File({
          contents: utf8
        }));
        return stream.end();
      });
      it('should translate utf8 to shift_jis', function(done) {
        var stream;
        stream = iconv({
          encoding: 'shift_jis'
        });
        stream.on('data', function(file) {
          return bufEq(file.contents, shift_jis).should.be["true"];
        });
        stream.on('end', done);
        stream.write(new File({
          contents: utf8
        }));
        return stream.end();
      });
      return it('should translate shift_jis to utf8', function(done) {
        var stream;
        stream = iconv({
          decoding: 'shift_jis'
        });
        stream.on('data', function(file) {
          return bufEq(file.contents, utf8).should.be["true"];
        });
        stream.on('end', done);
        stream.write(new File({
          contents: shift_jis
        }));
        return stream.end();
      });
    });
  });

}).call(this);
