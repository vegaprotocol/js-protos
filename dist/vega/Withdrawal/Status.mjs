import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "STATUS_UNSPECIFIED"],
  [1, "STATUS_OPEN"],
  [2, "STATUS_REJECTED"],
  [3, "STATUS_FINALIZED"],
])

export const STATUS_UNSPECIFIED = 0
export const STATUS_OPEN = 1
export const STATUS_REJECTED = 2
export const STATUS_FINALIZED = 3

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 3) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
