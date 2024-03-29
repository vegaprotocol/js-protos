/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const TIME_IN_FORCE_UNSPECIFIED = 0
const TIME_IN_FORCE_GTC = 1
const TIME_IN_FORCE_GTT = 2
const TIME_IN_FORCE_IOC = 3
const TIME_IN_FORCE_FOK = 4
const TIME_IN_FORCE_GFA = 5
const TIME_IN_FORCE_GFN = 6

const enumValues = new Map([
  [0, 'TIME_IN_FORCE_UNSPECIFIED'],
  [1, 'TIME_IN_FORCE_GTC'],
  [2, 'TIME_IN_FORCE_GTT'],
  [3, 'TIME_IN_FORCE_IOC'],
  [4, 'TIME_IN_FORCE_FOK'],
  [5, 'TIME_IN_FORCE_GFA'],
  [6, 'TIME_IN_FORCE_GFN']
])
const enumNames = new Map([
  ['TIME_IN_FORCE_UNSPECIFIED', 0],
  ['TIME_IN_FORCE_GTC', 1],
  ['TIME_IN_FORCE_GTT', 2],
  ['TIME_IN_FORCE_IOC', 3],
  ['TIME_IN_FORCE_FOK', 4],
  ['TIME_IN_FORCE_GFA', 5],
  ['TIME_IN_FORCE_GFN', 6]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid TimeInForce value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid TimeInForce value (' + value + ')')

  if (0 <= value && value <= 6) return 1

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
  TIME_IN_FORCE_UNSPECIFIED,
  TIME_IN_FORCE_GTC,
  TIME_IN_FORCE_GTT,
  TIME_IN_FORCE_IOC,
  TIME_IN_FORCE_FOK,
  TIME_IN_FORCE_GFA,
  TIME_IN_FORCE_GFN
}
