'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');
var Type = require('./Type.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$name = '';
  let field$type = 0;
  let field$numberDecimalPlaces = null;
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$name = types.string(data);
        break

      case 2:
        field$type = Type.decode(data);
        break

      case 3:
        field$numberDecimalPlaces = types.uint64(data);
        break
    }
  }
  return {
    name: field$name,
    type: field$type,
    numberDecimalPlaces: field$numberDecimalPlaces
  }
}

exports.decode = decode;
