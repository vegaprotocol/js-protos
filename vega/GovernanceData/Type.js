/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const TYPE_SINGLE_OR_UNSPECIFIED = 0
const TYPE_BATCH = 1

const enumValues = new Map([
  [0, 'TYPE_SINGLE_OR_UNSPECIFIED'],
  [1, 'TYPE_BATCH']
])
const enumNames = new Map([
  ['TYPE_SINGLE_OR_UNSPECIFIED', 0],
  ['TYPE_BATCH', 1]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid Type value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid Type value (' + value + ')')

  if (0 <= value && value <= 1) return 1

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

module.exports = {
  encode,
  decode,
  encodingLength,
  stringify,
  parse,
  TYPE_SINGLE_OR_UNSPECIFIED,
  TYPE_BATCH
}