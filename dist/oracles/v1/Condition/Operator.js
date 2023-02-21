import { enumerable } from 'protobuf-codec/encode/types'
import { int32 as decodeEnumerable } from 'protobuf-codec/decode/types'

const _strings = new Map([
  [0, 'OPERATOR_UNSPECIFIED'],
  ['OPERATOR_UNSPECIFIED', 0],
  [1, 'OPERATOR_EQUALS'],
  ['OPERATOR_EQUALS', 1],
  [2, 'OPERATOR_GREATER_THAN'],
  ['OPERATOR_GREATER_THAN', 2],
  [3, 'OPERATOR_GREATER_THAN_OR_EQUAL'],
  ['OPERATOR_GREATER_THAN_OR_EQUAL', 3],
  [4, 'OPERATOR_LESS_THAN'],
  ['OPERATOR_LESS_THAN', 4],
  [5, 'OPERATOR_LESS_THAN_OR_EQUAL'],
  ['OPERATOR_LESS_THAN_OR_EQUAL', 5]
])
export function string(value) {
  return _strings.get(value)
}

export const OPERATOR_UNSPECIFIED = 0
export const OPERATOR_EQUALS = 1
export const OPERATOR_GREATER_THAN = 2
export const OPERATOR_GREATER_THAN_OR_EQUAL = 3
export const OPERATOR_LESS_THAN = 4
export const OPERATOR_LESS_THAN_OR_EQUAL = 5

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') {
    const int = string(value)
    if (int == null)
      throw new Error(`${value} is not a valid value for Operator`)
    return encode(int, buf, byteOffset)
  }

  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 5) return 1

  // enumerable max value in case of unknown value
  return 5
}

export function decode(varint) {
  const int = decodeEnumerable(varint)
  return string(int) ?? int
}
