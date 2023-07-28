'use strict';

var assert = require('nanoassert');
var types = require('protobuf-codec/encode/types');
var types$1 = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

const POSITION_STATUS_UNSPECIFIED = 0;
const POSITION_STATUS_ORDERS_CLOSED = 1;
const POSITION_STATUS_CLOSED_OUT = 2;
const POSITION_STATUS_DISTRESSED = 4;

const enumValues = new Map([
  [0, 'POSITION_STATUS_UNSPECIFIED'],
  [1, 'POSITION_STATUS_ORDERS_CLOSED'],
  [2, 'POSITION_STATUS_CLOSED_OUT'],
  [4, 'POSITION_STATUS_DISTRESSED']
]);
const enumNames = new Map([
  ['POSITION_STATUS_UNSPECIFIED', 0],
  ['POSITION_STATUS_ORDERS_CLOSED', 1],
  ['POSITION_STATUS_CLOSED_OUT', 2],
  ['POSITION_STATUS_DISTRESSED', 4]
]);

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid PositionStatus value (' + value + ')')

  return types.enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = types$1.enumerable(varint);

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid PositionStatus value (' + value + ')');

  if (0 <= value && value <= 4) return 1

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

exports.POSITION_STATUS_CLOSED_OUT = POSITION_STATUS_CLOSED_OUT;
exports.POSITION_STATUS_DISTRESSED = POSITION_STATUS_DISTRESSED;
exports.POSITION_STATUS_ORDERS_CLOSED = POSITION_STATUS_ORDERS_CLOSED;
exports.POSITION_STATUS_UNSPECIFIED = POSITION_STATUS_UNSPECIFIED;
exports.decode = decode;
exports.encode = encode;
exports.encodingLength = encodingLength;
exports.parse = parse;
exports.stringify = stringify;
