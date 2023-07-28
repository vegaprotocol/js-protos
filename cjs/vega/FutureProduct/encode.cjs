'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');
var encode$1 = require('../DataSourceDefinition/encode.cjs');
var encode$2 = require('../DataSourceSpecToFutureBinding/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.settlementAsset) writer.bytes(1, obj.settlementAsset, types.string);
  if (obj.quoteName) writer.bytes(2, obj.quoteName, types.string);
  if (obj.dataSourceSpecForSettlementData)
    writer.bytes(
      3,
      encode$1.encode(obj.dataSourceSpecForSettlementData)
    );
  if (obj.dataSourceSpecForTradingTermination)
    writer.bytes(
      4,
      encode$1.encode(obj.dataSourceSpecForTradingTermination)
    );
  if (obj.dataSourceSpecBinding)
    writer.bytes(
      5,
      encode$2.encode(obj.dataSourceSpecBinding)
    );

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
