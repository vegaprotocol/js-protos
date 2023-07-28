'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');
var Value = require('./Value.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$partyId = '';
  let field$value = 0;
  let field$proposalId = '';
  let field$timestamp = 0n;
  let field$totalGovernanceTokenBalance = '';
  let field$totalGovernanceTokenWeight = '';
  let field$totalEquityLikeShareWeight = '';
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$partyId = types.string(data);
        break

      case 2:
        field$value = Value.decode(data);
        break

      case 3:
        field$proposalId = types.string(data);
        break

      case 4:
        field$timestamp = types.int64(data);
        break

      case 5:
        field$totalGovernanceTokenBalance = types.string(data);
        break

      case 6:
        field$totalGovernanceTokenWeight = types.string(data);
        break

      case 7:
        field$totalEquityLikeShareWeight = types.string(data);
        break
    }
  }
  return {
    partyId: field$partyId,
    value: field$value,
    proposalId: field$proposalId,
    timestamp: field$timestamp,
    totalGovernanceTokenBalance: field$totalGovernanceTokenBalance,
    totalGovernanceTokenWeight: field$totalGovernanceTokenWeight,
    totalEquityLikeShareWeight: field$totalEquityLikeShareWeight
  }
}

exports.decode = decode;
