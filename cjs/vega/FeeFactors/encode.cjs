'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.makerFee) writer.bytes(1, obj.makerFee, types.string);
  if (obj.infrastructureFee) writer.bytes(2, obj.infrastructureFee, types.string);
  if (obj.liquidityFee) writer.bytes(3, obj.liquidityFee, types.string);

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
