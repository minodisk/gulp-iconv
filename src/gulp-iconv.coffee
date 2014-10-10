through = require 'through2'
{ PluginError } = require 'gulp-util'
{ decode, encode, decodeStream, encodeStream } = require 'iconv-lite'
{ assign, clone } = require 'lodash'

PLUGIN_NAME = 'gulp-iconv'

defOpts =
  decoding: 'utf8'
  encoding: 'utf8'

module.exports = (opts = {}) ->
  {decoding, encoding} = assign clone(defOpts), opts

  through.obj (file, enc, callback) ->
    if file.isNull()
      @push file
      callback()
      return

    if file.isBuffer()
      str = decode file.contents, decoding
      buf = encode str, encoding
      file.contents = buf
      @push file
      callback()

    throw new PluginError PLUGIN_NAME, 'Stream is not supported' if file.isStream()
