'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');
var encode$1 = require('../PriceLevel/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.marketId) writer.bytes(1, obj.marketId, types.string);
  if (obj.buy?.length)
    obj.buy.forEach((v) => writer.bytes(2, encode$1.encode(v)));
  if (obj.sell?.length)
    obj.sell.forEach((v) => writer.bytes(3, encode$1.encode(v)));
  if (obj.sequenceNumber) writer.varint(4, obj.sequenceNumber, types.uint64);
  if (obj.previousSequenceNumber)
    writer.varint(5, obj.previousSequenceNumber, types.uint64);

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
