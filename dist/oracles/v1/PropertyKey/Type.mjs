import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "TYPE_UNSPECIFIED"],
  [1, "TYPE_EMPTY"],
  [2, "TYPE_INTEGER"],
  [3, "TYPE_STRING"],
  [4, "TYPE_BOOLEAN"],
  [5, "TYPE_DECIMAL"],
  [6, "TYPE_TIMESTAMP"],
])

export const TYPE_UNSPECIFIED = 0
export const TYPE_EMPTY = 1
export const TYPE_INTEGER = 2
export const TYPE_STRING = 3
export const TYPE_BOOLEAN = 4
export const TYPE_DECIMAL = 5
export const TYPE_TIMESTAMP = 6

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 6) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
