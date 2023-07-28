'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');
var encode$1 = require('../EpochTimestamps/encode.cjs');
var encode$2 = require('../Node/encode.cjs');
var encode$3 = require('../Delegation/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.seq) writer.varint(1, obj.seq, types.uint64);
  if (obj.timestamps)
    writer.bytes(2, encode$1.encode(obj.timestamps));
  if (obj.validators?.length)
    obj.validators.forEach((v) => writer.bytes(3, encode$2.encode(v)));
  if (obj.delegations?.length)
    obj.delegations.forEach((v) => writer.bytes(4, encode$3.encode(v)));

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
