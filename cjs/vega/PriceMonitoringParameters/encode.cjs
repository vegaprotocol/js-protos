'use strict';

var Writer = require('protobuf-codec/encode/writer');
var encode$1 = require('../PriceMonitoringTrigger/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.triggers?.length)
    obj.triggers.forEach((v) =>
      writer.bytes(1, encode$1.encode(v))
    );

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
