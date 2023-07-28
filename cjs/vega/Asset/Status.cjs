'use strict';

var assert = require('nanoassert');
var types = require('protobuf-codec/encode/types');
var types$1 = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

const STATUS_UNSPECIFIED = 0;
const STATUS_PROPOSED = 1;
const STATUS_REJECTED = 2;
const STATUS_PENDING_LISTING = 3;
const STATUS_ENABLED = 4;

const enumValues = new Map([
  [0, 'STATUS_UNSPECIFIED'],
  [1, 'STATUS_PROPOSED'],
  [2, 'STATUS_REJECTED'],
  [3, 'STATUS_PENDING_LISTING'],
  [4, 'STATUS_ENABLED']
]);
const enumNames = new Map([
  ['STATUS_UNSPECIFIED', 0],
  ['STATUS_PROPOSED', 1],
  ['STATUS_REJECTED', 2],
  ['STATUS_PENDING_LISTING', 3],
  ['STATUS_ENABLED', 4]
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

exports.STATUS_ENABLED = STATUS_ENABLED;
exports.STATUS_PENDING_LISTING = STATUS_PENDING_LISTING;
exports.STATUS_PROPOSED = STATUS_PROPOSED;
exports.STATUS_REJECTED = STATUS_REJECTED;
exports.STATUS_UNSPECIFIED = STATUS_UNSPECIFIED;
exports.decode = decode;
exports.encode = encode;
exports.encodingLength = encodingLength;
exports.parse = parse;
exports.stringify = stringify;
