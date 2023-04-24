/// autogenerated by protoc-plugin-js
import assert from 'nanoassert'
import { enumerable } from 'protobuf-codec/encode/types'
import { enumerable as decodeEnumerable } from 'protobuf-codec/decode/types'

export const STATUS_UNSPECIFIED = 0
export const STATUS_ACTIVE = 1
export const STATUS_EXPIRED = 2
export const STATUS_CANCELLED = 3
export const STATUS_STOPPED = 4
export const STATUS_FILLED = 5
export const STATUS_REJECTED = 6
export const STATUS_PARTIALLY_FILLED = 7
export const STATUS_PARKED = 8

const enumValues = new Map([
  [0, 'STATUS_UNSPECIFIED'],
  [1, 'STATUS_ACTIVE'],
  [2, 'STATUS_EXPIRED'],
  [3, 'STATUS_CANCELLED'],
  [4, 'STATUS_STOPPED'],
  [5, 'STATUS_FILLED'],
  [6, 'STATUS_REJECTED'],
  [7, 'STATUS_PARTIALLY_FILLED'],
  [8, 'STATUS_PARKED']
])
const enumNames = new Map([
  ['STATUS_UNSPECIFIED', 0],
  ['STATUS_ACTIVE', 1],
  ['STATUS_EXPIRED', 2],
  ['STATUS_CANCELLED', 3],
  ['STATUS_STOPPED', 4],
  ['STATUS_FILLED', 5],
  ['STATUS_REJECTED', 6],
  ['STATUS_PARTIALLY_FILLED', 7],
  ['STATUS_PARKED', 8]
])

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null) throw new Error('Invalid Status value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

export function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

export function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid Status value (' + value + ')')

  if (0 <= value && value <= 8) return 1

  // enumerable max value in case of unknown value
  return 5
}

/**
 * Convert an enum value to it's human readable name.
 * Returns undefined on an unknown value.
 */
export function stringify(int) {
  return enumValues.get(int)
}

/**
 * Convert an enum string names to it's machine integer value.
 * Returns undefined on an unknown name.
 */
export function parse(str) {
  return enumNames.get(str)
}
