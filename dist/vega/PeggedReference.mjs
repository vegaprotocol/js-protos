import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "PEGGED_REFERENCE_UNSPECIFIED"],
  [1, "PEGGED_REFERENCE_MID"],
  [2, "PEGGED_REFERENCE_BEST_BID"],
  [3, "PEGGED_REFERENCE_BEST_ASK"],
])

export const PEGGED_REFERENCE_UNSPECIFIED = 0
export const PEGGED_REFERENCE_MID = 1
export const PEGGED_REFERENCE_BEST_BID = 2
export const PEGGED_REFERENCE_BEST_ASK = 3

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
