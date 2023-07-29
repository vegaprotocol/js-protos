/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const POSITION_STATUS_UNSPECIFIED = 0
const POSITION_STATUS_ORDERS_CLOSED = 1
const POSITION_STATUS_CLOSED_OUT = 2
const POSITION_STATUS_DISTRESSED = 4

const enumValues = new Map([
  [0, 'POSITION_STATUS_UNSPECIFIED'],
  [1, 'POSITION_STATUS_ORDERS_CLOSED'],
  [2, 'POSITION_STATUS_CLOSED_OUT'],
  [4, 'POSITION_STATUS_DISTRESSED']
])
const enumNames = new Map([
  ['POSITION_STATUS_UNSPECIFIED', 0],
  ['POSITION_STATUS_ORDERS_CLOSED', 1],
  ['POSITION_STATUS_CLOSED_OUT', 2],
  ['POSITION_STATUS_DISTRESSED', 4]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid PositionStatus value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid PositionStatus value (' + value + ')')

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

module.exports = {
  encode,
  decode,
  encodingLength,
  stringify,
  parse,
  POSITION_STATUS_UNSPECIFIED,
  POSITION_STATUS_ORDERS_CLOSED,
  POSITION_STATUS_CLOSED_OUT,
  POSITION_STATUS_DISTRESSED
}