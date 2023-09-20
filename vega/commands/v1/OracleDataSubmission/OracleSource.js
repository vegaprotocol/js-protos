/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const ORACLE_SOURCE_UNSPECIFIED = 0
const ORACLE_SOURCE_OPEN_ORACLE = 1
const ORACLE_SOURCE_JSON = 2
const ORACLE_SOURCE_ETHEREUM = 3

const enumValues = new Map([
  [0, 'ORACLE_SOURCE_UNSPECIFIED'],
  [1, 'ORACLE_SOURCE_OPEN_ORACLE'],
  [2, 'ORACLE_SOURCE_JSON'],
  [3, 'ORACLE_SOURCE_ETHEREUM']
])
const enumNames = new Map([
  ['ORACLE_SOURCE_UNSPECIFIED', 0],
  ['ORACLE_SOURCE_OPEN_ORACLE', 1],
  ['ORACLE_SOURCE_JSON', 2],
  ['ORACLE_SOURCE_ETHEREUM', 3]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid OracleSource value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid OracleSource value (' + value + ')')

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
  ORACLE_SOURCE_UNSPECIFIED,
  ORACLE_SOURCE_OPEN_ORACLE,
  ORACLE_SOURCE_JSON,
  ORACLE_SOURCE_ETHEREUM
}
