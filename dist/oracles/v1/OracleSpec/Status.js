import { enumerable } from 'protobuf-codec/encode/types'
import { int32 as decodeEnumerable } from 'protobuf-codec/decode/types'

const _strings = new Map([
  [0, 'STATUS_UNSPECIFIED'],
  ['STATUS_UNSPECIFIED', 0],
  [1, 'STATUS_ACTIVE'],
  ['STATUS_ACTIVE', 1],
  [2, 'STATUS_DEACTIVATED'],
  ['STATUS_DEACTIVATED', 2]
])
export function string(value) {
  return _strings.get(value)
}

export const STATUS_UNSPECIFIED = 0
export const STATUS_ACTIVE = 1
export const STATUS_DEACTIVATED = 2

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') {
    const int = string(value)
    if (int == null) throw new Error(`${value} is not a valid value for Status`)
    return encode(int, buf, byteOffset)
  }

  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 2) return 1

  // enumerable max value in case of unknown value
  return 5
}

export function decode(varint) {
  const int = decodeEnumerable(varint)
  return string(int) ?? int
}
