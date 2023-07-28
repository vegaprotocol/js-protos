'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');
var DispatchMetric = require('../DispatchMetric.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$assetForMetric = '';
  let field$metric = 0;
  const field$markets = [];
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$assetForMetric = types.string(data);
        break

      case 2:
        field$metric = DispatchMetric.decode(data);
        break

      case 3:
        field$markets.push(types.string(data));
        break
    }
  }
  return {
    assetForMetric: field$assetForMetric,
    metric: field$metric,
    markets: field$markets
  }
}

exports.decode = decode;
