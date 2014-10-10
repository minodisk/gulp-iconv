var PLUGIN_NAME, PluginError, assign, clone, decode, decodeStream, defOpts, encode, encodeStream, through, _ref, _ref1;

through = require('through2');

PluginError = require('gulp-util').PluginError;

_ref = require('iconv-lite'), decode = _ref.decode, encode = _ref.encode, decodeStream = _ref.decodeStream, encodeStream = _ref.encodeStream;

_ref1 = require('lodash'), assign = _ref1.assign, clone = _ref1.clone;

PLUGIN_NAME = 'gulp-iconv';

defOpts = {
  decoding: 'utf8',
  encoding: 'utf8'
};

module.exports = function(opts) {
  var decoding, encoding, _ref2;
  if (opts == null) {
    opts = {};
  }
  _ref2 = assign(clone(defOpts), opts), decoding = _ref2.decoding, encoding = _ref2.encoding;
  console.log(decoding, '->', encoding);
  return through.obj(function(file, enc, callback) {
    var buf, str;
    if (file.isNull()) {
      this.push(file);
      callback();
      return;
    }
    if (file.isBuffer()) {
      str = decode(file.contents, decoding);
      buf = encode(str, encoding);
      file.contents = buf;
      this.push(file);
      callback();
    }
    if (file.isStream()) {
      throw new PluginError(PLUGIN_NAME, 'Stream is not supported');
    }
  });
};
