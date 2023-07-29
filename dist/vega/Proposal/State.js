/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const STATE_UNSPECIFIED = 0
const STATE_FAILED = 1
const STATE_OPEN = 2
const STATE_PASSED = 3
const STATE_REJECTED = 4
const STATE_DECLINED = 5
const STATE_ENACTED = 6
const STATE_WAITING_FOR_NODE_VOTE = 7

const enumValues = new Map([
  [0, 'STATE_UNSPECIFIED'],
  [1, 'STATE_FAILED'],
  [2, 'STATE_OPEN'],
  [3, 'STATE_PASSED'],
  [4, 'STATE_REJECTED'],
  [5, 'STATE_DECLINED'],
  [6, 'STATE_ENACTED'],
  [7, 'STATE_WAITING_FOR_NODE_VOTE']
])
const enumNames = new Map([
  ['STATE_UNSPECIFIED', 0],
  ['STATE_FAILED', 1],
  ['STATE_OPEN', 2],
  ['STATE_PASSED', 3],
  ['STATE_REJECTED', 4],
  ['STATE_DECLINED', 5],
  ['STATE_ENACTED', 6],
  ['STATE_WAITING_FOR_NODE_VOTE', 7]
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

  if (0 <= value && value <= 7) return 1

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
  STATE_FAILED,
  STATE_OPEN,
  STATE_PASSED,
  STATE_REJECTED,
  STATE_DECLINED,
  STATE_ENACTED,
  STATE_WAITING_FOR_NODE_VOTE
}
