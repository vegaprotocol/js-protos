import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "TYPE_UNSPECIFIED"],
  [1, "TYPE_DEFAULT"],
  [2, "TYPE_NETWORK_CLOSE_OUT_GOOD"],
  [3, "TYPE_NETWORK_CLOSE_OUT_BAD"],
])

export const TYPE_UNSPECIFIED = 0
export const TYPE_DEFAULT = 1
export const TYPE_NETWORK_CLOSE_OUT_GOOD = 2
export const TYPE_NETWORK_CLOSE_OUT_BAD = 3

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
