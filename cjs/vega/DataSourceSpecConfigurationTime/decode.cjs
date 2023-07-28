'use strict';

var reader = require('protobuf-codec/decode/reader');
var decode$1 = require('../data/v1/Condition/decode.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const field$conditions = [];
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$conditions.push(decode$1.decode(data));
        break
    }
  }
  return { conditions: field$conditions }
}

exports.decode = decode;
