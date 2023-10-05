/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const REJECTION_REASON_UNSPECIFIED = 0
const REJECTION_REASON_TRADING_NOT_ALLOWED = 1
const REJECTION_REASON_EXPIRY_IN_THE_PAST = 2
const REJECTION_REASON_MUST_BE_REDUCE_ONLY = 3
const REJECTION_REASON_MAX_STOP_ORDERS_PER_PARTY_REACHED = 4
const REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_WITHOUT_A_POSITION = 5
const REJECTION_REASON_STOP_ORDER_NOT_CLOSING_THE_POSITION = 6

const enumValues = new Map([
  [0, 'REJECTION_REASON_UNSPECIFIED'],
  [1, 'REJECTION_REASON_TRADING_NOT_ALLOWED'],
  [2, 'REJECTION_REASON_EXPIRY_IN_THE_PAST'],
  [3, 'REJECTION_REASON_MUST_BE_REDUCE_ONLY'],
  [4, 'REJECTION_REASON_MAX_STOP_ORDERS_PER_PARTY_REACHED'],
  [5, 'REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_WITHOUT_A_POSITION'],
  [6, 'REJECTION_REASON_STOP_ORDER_NOT_CLOSING_THE_POSITION']
])
const enumNames = new Map([
  ['REJECTION_REASON_UNSPECIFIED', 0],
  ['REJECTION_REASON_TRADING_NOT_ALLOWED', 1],
  ['REJECTION_REASON_EXPIRY_IN_THE_PAST', 2],
  ['REJECTION_REASON_MUST_BE_REDUCE_ONLY', 3],
  ['REJECTION_REASON_MAX_STOP_ORDERS_PER_PARTY_REACHED', 4],
  ['REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_WITHOUT_A_POSITION', 5],
  ['REJECTION_REASON_STOP_ORDER_NOT_CLOSING_THE_POSITION', 6]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid RejectionReason value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid RejectionReason value (' + value + ')')

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
  REJECTION_REASON_UNSPECIFIED,
  REJECTION_REASON_TRADING_NOT_ALLOWED,
  REJECTION_REASON_EXPIRY_IN_THE_PAST,
  REJECTION_REASON_MUST_BE_REDUCE_ONLY,
  REJECTION_REASON_MAX_STOP_ORDERS_PER_PARTY_REACHED,
  REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_WITHOUT_A_POSITION,
  REJECTION_REASON_STOP_ORDER_NOT_CLOSING_THE_POSITION
}
