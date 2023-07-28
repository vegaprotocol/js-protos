'use strict';

var Writer = require('protobuf-codec/encode/writer');
var encode$1 = require('../AssetDetails/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.changes) writer.bytes(1, encode$1.encode(obj.changes));

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
