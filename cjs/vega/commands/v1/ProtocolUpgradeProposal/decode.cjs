'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$upgradeBlockHeight = 0n;
  let field$vegaReleaseTag = '';
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$upgradeBlockHeight = types.uint64(data);
        break

      case 2:
        field$vegaReleaseTag = types.string(data);
        break
    }
  }
  return {
    upgradeBlockHeight: field$upgradeBlockHeight,
    vegaReleaseTag: field$vegaReleaseTag
  }
}

exports.decode = decode;
