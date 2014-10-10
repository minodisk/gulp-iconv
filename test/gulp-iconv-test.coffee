require('chai').should()
{ File } = require 'gulp-util'
iconv = require '../lib/gulp-iconv'
{ join } = require 'path'
{ readFileSync } = require 'fs'
bufEq = require 'buffer-equal'

shift_jis = readFileSync join __dirname, 'fixtures/shift_jis.txt'
utf8 = readFileSync join __dirname, 'fixtures/utf8.txt'

describe 'gulp-iconv', ->

  describe 'buffer mode', ->

    it 'should translate utf8 to utf8', (done) ->
      stream = iconv()
      stream.on 'data', (file) ->
        bufEq(file.contents, utf8).should.be.true
      stream.on 'end', done
      stream.write new File contents: utf8
      stream.end()

    it 'should translate utf8 to shift_jis', (done) ->
      stream = iconv encoding: 'shift_jis'
      stream.on 'data', (file) ->
        bufEq(file.contents, shift_jis).should.be.true
      stream.on 'end', done
      stream.write new File contents: utf8
      stream.end()

    it 'should translate shift_jis to utf8', (done) ->
      stream = iconv decoding: 'shift_jis'
      stream.on 'data', (file) ->
        bufEq(file.contents, utf8).should.be.true
      stream.on 'end', done
      stream.write new File contents: shift_jis
      stream.end()
