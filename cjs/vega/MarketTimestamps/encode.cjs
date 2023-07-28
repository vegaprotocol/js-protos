'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.proposed) writer.varint(1, obj.proposed, types.int64);
  if (obj.pending) writer.varint(2, obj.pending, types.int64);
  if (obj.open) writer.varint(3, obj.open, types.int64);
  if (obj.close) writer.varint(4, obj.close, types.int64);

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
