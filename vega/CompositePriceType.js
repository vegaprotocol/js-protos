/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const COMPOSITE_PRICE_TYPE_UNSPECIFIED = 0
const COMPOSITE_PRICE_TYPE_WEIGHTED = 1
const COMPOSITE_PRICE_TYPE_MEDIAN = 2
const COMPOSITE_PRICE_TYPE_LAST_TRADE = 3

const enumValues = new Map([
  [0, 'COMPOSITE_PRICE_TYPE_UNSPECIFIED'],
  [1, 'COMPOSITE_PRICE_TYPE_WEIGHTED'],
  [2, 'COMPOSITE_PRICE_TYPE_MEDIAN'],
  [3, 'COMPOSITE_PRICE_TYPE_LAST_TRADE']
])
const enumNames = new Map([
  ['COMPOSITE_PRICE_TYPE_UNSPECIFIED', 0],
  ['COMPOSITE_PRICE_TYPE_WEIGHTED', 1],
  ['COMPOSITE_PRICE_TYPE_MEDIAN', 2],
  ['COMPOSITE_PRICE_TYPE_LAST_TRADE', 3]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid CompositePriceType value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid CompositePriceType value (' + value + ')')

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

module.exports = {
  encode,
  decode,
  encodingLength,
  stringify,
  parse,
  COMPOSITE_PRICE_TYPE_UNSPECIFIED,
  COMPOSITE_PRICE_TYPE_WEIGHTED,
  COMPOSITE_PRICE_TYPE_MEDIAN,
  COMPOSITE_PRICE_TYPE_LAST_TRADE
}
