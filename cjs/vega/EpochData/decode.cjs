'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$total = 0;
  let field$offline = 0;
  let field$online = 0;
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$total = types.int32(data);
        break

      case 2:
        field$offline = types.int32(data);
        break

      case 3:
        field$online = types.int32(data);
        break
    }
  }
  return { total: field$total, offline: field$offline, online: field$online }
}

exports.decode = decode;
