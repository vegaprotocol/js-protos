/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const STATUS_UNSPECIFIED = 0
const STATUS_ACTIVE = 1
const STATUS_DEACTIVATED = 2

const enumValues = new Map([
  [0, 'STATUS_UNSPECIFIED'],
  [1, 'STATUS_ACTIVE'],
  [2, 'STATUS_DEACTIVATED']
])
const enumNames = new Map([
  ['STATUS_UNSPECIFIED', 0],
  ['STATUS_ACTIVE', 1],
  ['STATUS_DEACTIVATED', 2]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid Status value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid Status value (' + value + ')')

  if (0 <= value && value <= 2) return 1

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
  STATUS_UNSPECIFIED,
  STATUS_ACTIVE,
  STATUS_DEACTIVATED
}
