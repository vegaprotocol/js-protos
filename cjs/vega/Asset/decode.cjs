'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');
var decode$1 = require('../AssetDetails/decode.cjs');
var Status = require('./Status.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$id = '';
  let field$details = {};
  let field$status = 0;
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = types.string(data);
        break

      case 2:
        field$details = decode$1.decode(data);
        break

      case 3:
        field$status = Status.decode(data);
        break
    }
  }
  return { id: field$id, details: field$details, status: field$status }
}

exports.decode = decode;
