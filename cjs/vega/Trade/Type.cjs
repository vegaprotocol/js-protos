'use strict';

var assert = require('nanoassert');
var types = require('protobuf-codec/encode/types');
var types$1 = require('protobuf-codec/decode/types');

/// autogenerated by protoc-plugin-js

const TYPE_UNSPECIFIED = 0;
const TYPE_DEFAULT = 1;
const TYPE_NETWORK_CLOSE_OUT_GOOD = 2;
const TYPE_NETWORK_CLOSE_OUT_BAD = 3;

const enumValues = new Map([
  [0, 'TYPE_UNSPECIFIED'],
  [1, 'TYPE_DEFAULT'],
  [2, 'TYPE_NETWORK_CLOSE_OUT_GOOD'],
  [3, 'TYPE_NETWORK_CLOSE_OUT_BAD']
]);
const enumNames = new Map([
  ['TYPE_UNSPECIFIED', 0],
  ['TYPE_DEFAULT', 1],
  ['TYPE_NETWORK_CLOSE_OUT_GOOD', 2],
  ['TYPE_NETWORK_CLOSE_OUT_BAD', 3]
]);

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid Type value (' + value + ')')

  return types.enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = types$1.enumerable(varint);

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid Type value (' + value + ')');

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

exports.TYPE_DEFAULT = TYPE_DEFAULT;
exports.TYPE_NETWORK_CLOSE_OUT_BAD = TYPE_NETWORK_CLOSE_OUT_BAD;
exports.TYPE_NETWORK_CLOSE_OUT_GOOD = TYPE_NETWORK_CLOSE_OUT_GOOD;
exports.TYPE_UNSPECIFIED = TYPE_UNSPECIFIED;
exports.decode = decode;
exports.encode = encode;
exports.encodingLength = encodingLength;
exports.parse = parse;
exports.stringify = stringify;
