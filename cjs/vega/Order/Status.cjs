'use strict';

var assert = require('nanoassert');
var types = require('protobuf-codec/encode/types');
var types$1 = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

const STATUS_UNSPECIFIED = 0;
const STATUS_ACTIVE = 1;
const STATUS_EXPIRED = 2;
const STATUS_CANCELLED = 3;
const STATUS_STOPPED = 4;
const STATUS_FILLED = 5;
const STATUS_REJECTED = 6;
const STATUS_PARTIALLY_FILLED = 7;
const STATUS_PARKED = 8;

const enumValues = new Map([
  [0, 'STATUS_UNSPECIFIED'],
  [1, 'STATUS_ACTIVE'],
  [2, 'STATUS_EXPIRED'],
  [3, 'STATUS_CANCELLED'],
  [4, 'STATUS_STOPPED'],
  [5, 'STATUS_FILLED'],
  [6, 'STATUS_REJECTED'],
  [7, 'STATUS_PARTIALLY_FILLED'],
  [8, 'STATUS_PARKED']
]);
const enumNames = new Map([
  ['STATUS_UNSPECIFIED', 0],
  ['STATUS_ACTIVE', 1],
  ['STATUS_EXPIRED', 2],
  ['STATUS_CANCELLED', 3],
  ['STATUS_STOPPED', 4],
  ['STATUS_FILLED', 5],
  ['STATUS_REJECTED', 6],
  ['STATUS_PARTIALLY_FILLED', 7],
  ['STATUS_PARKED', 8]
]);

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid Status value (' + value + ')')

  return types.enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = types$1.enumerable(varint);

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid Status value (' + value + ')');

  if (0 <= value && value <= 8) return 1

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

exports.STATUS_ACTIVE = STATUS_ACTIVE;
exports.STATUS_CANCELLED = STATUS_CANCELLED;
exports.STATUS_EXPIRED = STATUS_EXPIRED;
exports.STATUS_FILLED = STATUS_FILLED;
exports.STATUS_PARKED = STATUS_PARKED;
exports.STATUS_PARTIALLY_FILLED = STATUS_PARTIALLY_FILLED;
exports.STATUS_REJECTED = STATUS_REJECTED;
exports.STATUS_STOPPED = STATUS_STOPPED;
exports.STATUS_UNSPECIFIED = STATUS_UNSPECIFIED;
exports.decode = decode;
exports.encode = encode;
exports.encodingLength = encodingLength;
exports.parse = parse;
exports.stringify = stringify;
