'use strict';

var Writer = require('protobuf-codec/encode/writer');
var encode$1 = require('../Erc20WithdrawExt/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.ext?.erc20 ?? obj.erc20)
    writer.bytes(1, encode$1.encode(obj.ext?.erc20 ?? obj.erc20));

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
