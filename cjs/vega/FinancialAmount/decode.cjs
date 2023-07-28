'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$amount = '';
  let field$asset = '';
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$amount = types.string(data);
        break

      case 2:
        field$asset = types.string(data);
        break
    }
  }
  return { amount: field$amount, asset: field$asset }
}

exports.decode = decode;
