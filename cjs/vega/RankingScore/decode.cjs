'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');
var ValidatorNodeStatus = require('../ValidatorNodeStatus.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$stakeScore = '';
  let field$performanceScore = '';
  let field$previousStatus = 0;
  let field$status = 0;
  let field$votingPower = 0;
  let field$rankingScore = '';
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$stakeScore = types.string(data);
        break

      case 2:
        field$performanceScore = types.string(data);
        break

      case 3:
        field$previousStatus = ValidatorNodeStatus.decode(data);
        break

      case 4:
        field$status = ValidatorNodeStatus.decode(data);
        break

      case 5:
        field$votingPower = types.uint32(data);
        break

      case 6:
        field$rankingScore = types.string(data);
        break
    }
  }
  return {
    stakeScore: field$stakeScore,
    performanceScore: field$performanceScore,
    previousStatus: field$previousStatus,
    status: field$status,
    votingPower: field$votingPower,
    rankingScore: field$rankingScore
  }
}

exports.decode = decode;
