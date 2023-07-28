'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.horizon) writer.varint(1, obj.horizon, types.int64);
  if (obj.probability) writer.bytes(2, obj.probability, types.string);
  if (obj.auctionExtension) writer.varint(3, obj.auctionExtension, types.int64);

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
