'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');
var ValidatorNodeStatus = require('../ValidatorNodeStatus.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$rawValidatorScore = '';
  let field$performanceScore = '';
  let field$multisigScore = '';
  let field$validatorScore = '';
  let field$normalisedScore = '';
  let field$validatorStatus = 0;
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$rawValidatorScore = types.string(data);
        break

      case 2:
        field$performanceScore = types.string(data);
        break

      case 3:
        field$multisigScore = types.string(data);
        break

      case 4:
        field$validatorScore = types.string(data);
        break

      case 5:
        field$normalisedScore = types.string(data);
        break

      case 6:
        field$validatorStatus = ValidatorNodeStatus.decode(data);
        break
    }
  }
  return {
    rawValidatorScore: field$rawValidatorScore,
    performanceScore: field$performanceScore,
    multisigScore: field$multisigScore,
    validatorScore: field$validatorScore,
    normalisedScore: field$normalisedScore,
    validatorStatus: field$validatorStatus
  }
}

exports.decode = decode;
