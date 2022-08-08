import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "STATUS_UNSPECIFIED"],
  [1, "STATUS_PROPOSED"],
  [2, "STATUS_REJECTED"],
  [3, "STATUS_PENDING_LISTING"],
  [4, "STATUS_ENABLED"],
])

export const STATUS_UNSPECIFIED = 0
export const STATUS_PROPOSED = 1
export const STATUS_REJECTED = 2
export const STATUS_PENDING_LISTING = 3
export const STATUS_ENABLED = 4

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 4) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
