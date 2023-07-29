/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const STATE_UNSPECIFIED = 0
const STATE_PROPOSED = 1
const STATE_REJECTED = 2
const STATE_PENDING = 3
const STATE_CANCELLED = 4
const STATE_ACTIVE = 5
const STATE_SUSPENDED = 6
const STATE_CLOSED = 7
const STATE_TRADING_TERMINATED = 8
const STATE_SETTLED = 9

const enumValues = new Map([
  [0, 'STATE_UNSPECIFIED'],
  [1, 'STATE_PROPOSED'],
  [2, 'STATE_REJECTED'],
  [3, 'STATE_PENDING'],
  [4, 'STATE_CANCELLED'],
  [5, 'STATE_ACTIVE'],
  [6, 'STATE_SUSPENDED'],
  [7, 'STATE_CLOSED'],
  [8, 'STATE_TRADING_TERMINATED'],
  [9, 'STATE_SETTLED']
])
const enumNames = new Map([
  ['STATE_UNSPECIFIED', 0],
  ['STATE_PROPOSED', 1],
  ['STATE_REJECTED', 2],
  ['STATE_PENDING', 3],
  ['STATE_CANCELLED', 4],
  ['STATE_ACTIVE', 5],
  ['STATE_SUSPENDED', 6],
  ['STATE_CLOSED', 7],
  ['STATE_TRADING_TERMINATED', 8],
  ['STATE_SETTLED', 9]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid State value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid State value (' + value + ')')

  if (0 <= value && value <= 9) return 1

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
  STATE_UNSPECIFIED,
  STATE_PROPOSED,
  STATE_REJECTED,
  STATE_PENDING,
  STATE_CANCELLED,
  STATE_ACTIVE,
  STATE_SUSPENDED,
  STATE_CLOSED,
  STATE_TRADING_TERMINATED,
  STATE_SETTLED
}
