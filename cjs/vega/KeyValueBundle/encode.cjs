'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');
var encode$1 = require('../StateVarValue/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.key) writer.bytes(1, obj.key, types.string);
  if (obj.tolerance) writer.bytes(2, obj.tolerance, types.string);
  if (obj.value) writer.bytes(3, encode$1.encode(obj.value));

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
