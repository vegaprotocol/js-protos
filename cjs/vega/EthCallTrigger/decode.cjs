'use strict';

var reader = require('protobuf-codec/decode/reader');
var decode$1 = require('../EthTimeTrigger/decode.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$trigger = null;
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$trigger = { timeTrigger: decode$1.decode(data) };
        break
    }
  }
  return { trigger: field$trigger }
}

exports.decode = decode;
