'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.vegaAssetId) writer.bytes(1, obj.vegaAssetId, types.string);
  if (obj.sourceEthereumAddress)
    writer.bytes(2, obj.sourceEthereumAddress, types.string);
  if (obj.targetPartyId) writer.bytes(3, obj.targetPartyId, types.string);
  if (obj.amount) writer.bytes(4, obj.amount, types.string);

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
