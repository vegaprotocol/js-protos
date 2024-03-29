/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const MARGIN_MODE_UNSPECIFIED = 0
const MARGIN_MODE_CROSS_MARGIN = 1
const MARGIN_MODE_ISOLATED_MARGIN = 2

const enumValues = new Map([
  [0, 'MARGIN_MODE_UNSPECIFIED'],
  [1, 'MARGIN_MODE_CROSS_MARGIN'],
  [2, 'MARGIN_MODE_ISOLATED_MARGIN']
])
const enumNames = new Map([
  ['MARGIN_MODE_UNSPECIFIED', 0],
  ['MARGIN_MODE_CROSS_MARGIN', 1],
  ['MARGIN_MODE_ISOLATED_MARGIN', 2]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid MarginMode value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid MarginMode value (' + value + ')')

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
  MARGIN_MODE_UNSPECIFIED,
  MARGIN_MODE_CROSS_MARGIN,
  MARGIN_MODE_ISOLATED_MARGIN
}
