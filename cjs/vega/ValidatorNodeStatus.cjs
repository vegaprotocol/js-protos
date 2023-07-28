'use strict';

var assert = require('nanoassert');
var types = require('protobuf-codec/encode/types');
var types$1 = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

const VALIDATOR_NODE_STATUS_UNSPECIFIED = 0;
const VALIDATOR_NODE_STATUS_TENDERMINT = 1;
const VALIDATOR_NODE_STATUS_ERSATZ = 2;
const VALIDATOR_NODE_STATUS_PENDING = 3;

const enumValues = new Map([
  [0, 'VALIDATOR_NODE_STATUS_UNSPECIFIED'],
  [1, 'VALIDATOR_NODE_STATUS_TENDERMINT'],
  [2, 'VALIDATOR_NODE_STATUS_ERSATZ'],
  [3, 'VALIDATOR_NODE_STATUS_PENDING']
]);
const enumNames = new Map([
  ['VALIDATOR_NODE_STATUS_UNSPECIFIED', 0],
  ['VALIDATOR_NODE_STATUS_TENDERMINT', 1],
  ['VALIDATOR_NODE_STATUS_ERSATZ', 2],
  ['VALIDATOR_NODE_STATUS_PENDING', 3]
]);

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid ValidatorNodeStatus value (' + value + ')')

  return types.enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = types$1.enumerable(varint);

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid ValidatorNodeStatus value (' + value + ')');

  if (0 <= value && value <= 3) return 1

  // enumerable max value in case of unknown value
  return 5
}

/**
 * Convert an enum value to it's human readable name.
 * Returns undefined on an unknown value.
 */
function stringify(int) {
  return enumValues.get(int)
}

/**
 * Convert an enum string names to it's machine integer value.
 * Returns undefined on an unknown name.
 */
function parse(str) {
  return enumNames.get(str)
}

exports.VALIDATOR_NODE_STATUS_ERSATZ = VALIDATOR_NODE_STATUS_ERSATZ;
exports.VALIDATOR_NODE_STATUS_PENDING = VALIDATOR_NODE_STATUS_PENDING;
exports.VALIDATOR_NODE_STATUS_TENDERMINT = VALIDATOR_NODE_STATUS_TENDERMINT;
exports.VALIDATOR_NODE_STATUS_UNSPECIFIED = VALIDATOR_NODE_STATUS_UNSPECIFIED;
exports.decode = decode;
exports.encode = encode;
exports.encodingLength = encodingLength;
exports.parse = parse;
exports.stringify = stringify;
