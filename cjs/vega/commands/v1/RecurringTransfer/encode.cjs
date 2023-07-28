'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');
var encode$1 = require('../../../DispatchStrategy/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.startEpoch) writer.varint(1, obj.startEpoch, types.uint64);
  if (obj.endEpoch) writer.varint(2, obj.endEpoch, types.uint64);
  if (obj.factor) writer.bytes(3, obj.factor, types.string);
  if (obj.dispatchStrategy)
    writer.bytes(4, encode$1.encode(obj.dispatchStrategy));

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
