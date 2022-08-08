import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "STATUS_UNSPECIFIED"],
  [1, "STATUS_ACTIVE"],
  [2, "STATUS_EXPIRED"],
  [3, "STATUS_CANCELLED"],
  [4, "STATUS_STOPPED"],
  [5, "STATUS_FILLED"],
  [6, "STATUS_REJECTED"],
  [7, "STATUS_PARTIALLY_FILLED"],
  [8, "STATUS_PARKED"],
])

export const STATUS_UNSPECIFIED = 0
export const STATUS_ACTIVE = 1
export const STATUS_EXPIRED = 2
export const STATUS_CANCELLED = 3
export const STATUS_STOPPED = 4
export const STATUS_FILLED = 5
export const STATUS_REJECTED = 6
export const STATUS_PARTIALLY_FILLED = 7
export const STATUS_PARKED = 8

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 8) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
