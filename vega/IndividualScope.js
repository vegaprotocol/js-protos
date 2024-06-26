/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const INDIVIDUAL_SCOPE_UNSPECIFIED = 0
const INDIVIDUAL_SCOPE_ALL = 1
const INDIVIDUAL_SCOPE_IN_TEAM = 2
const INDIVIDUAL_SCOPE_NOT_IN_TEAM = 3
const INDIVIDUAL_SCOPE_AMM = 4

const enumValues = new Map([
  [0, 'INDIVIDUAL_SCOPE_UNSPECIFIED'],
  [1, 'INDIVIDUAL_SCOPE_ALL'],
  [2, 'INDIVIDUAL_SCOPE_IN_TEAM'],
  [3, 'INDIVIDUAL_SCOPE_NOT_IN_TEAM'],
  [4, 'INDIVIDUAL_SCOPE_AMM']
])
const enumNames = new Map([
  ['INDIVIDUAL_SCOPE_UNSPECIFIED', 0],
  ['INDIVIDUAL_SCOPE_ALL', 1],
  ['INDIVIDUAL_SCOPE_IN_TEAM', 2],
  ['INDIVIDUAL_SCOPE_NOT_IN_TEAM', 3],
  ['INDIVIDUAL_SCOPE_AMM', 4]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid IndividualScope value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid IndividualScope value (' + value + ')')

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
  INDIVIDUAL_SCOPE_UNSPECIFIED,
  INDIVIDUAL_SCOPE_ALL,
  INDIVIDUAL_SCOPE_IN_TEAM,
  INDIVIDUAL_SCOPE_NOT_IN_TEAM,
  INDIVIDUAL_SCOPE_AMM
}
