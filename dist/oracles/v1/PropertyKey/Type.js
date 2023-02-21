import { enumerable } from 'protobuf-codec/encode/types'
import { int32 as decodeEnumerable } from 'protobuf-codec/decode/types'

const _strings = new Map([
  [0, 'TYPE_UNSPECIFIED'],
  ['TYPE_UNSPECIFIED', 0],
  [1, 'TYPE_EMPTY'],
  ['TYPE_EMPTY', 1],
  [2, 'TYPE_INTEGER'],
  ['TYPE_INTEGER', 2],
  [3, 'TYPE_STRING'],
  ['TYPE_STRING', 3],
  [4, 'TYPE_BOOLEAN'],
  ['TYPE_BOOLEAN', 4],
  [5, 'TYPE_DECIMAL'],
  ['TYPE_DECIMAL', 5],
  [6, 'TYPE_TIMESTAMP'],
  ['TYPE_TIMESTAMP', 6]
])
export function string(value) {
  return _strings.get(value)
}

export const TYPE_UNSPECIFIED = 0
export const TYPE_EMPTY = 1
export const TYPE_INTEGER = 2
export const TYPE_STRING = 3
export const TYPE_BOOLEAN = 4
export const TYPE_DECIMAL = 5
export const TYPE_TIMESTAMP = 6

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') {
    const int = string(value)
    if (int == null) throw new Error(`${value} is not a valid value for Type`)
    return encode(int, buf, byteOffset)
  }

  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 6) return 1

  // enumerable max value in case of unknown value
  return 5
}

export function decode(varint) {
  const int = decodeEnumerable(varint)
  return string(int) ?? int
}
