import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "TIME_IN_FORCE_UNSPECIFIED"],
  [1, "TIME_IN_FORCE_GTC"],
  [2, "TIME_IN_FORCE_GTT"],
  [3, "TIME_IN_FORCE_IOC"],
  [4, "TIME_IN_FORCE_FOK"],
  [5, "TIME_IN_FORCE_GFA"],
  [6, "TIME_IN_FORCE_GFN"],
])

export const TIME_IN_FORCE_UNSPECIFIED = 0
export const TIME_IN_FORCE_GTC = 1
export const TIME_IN_FORCE_GTT = 2
export const TIME_IN_FORCE_IOC = 3
export const TIME_IN_FORCE_FOK = 4
export const TIME_IN_FORCE_GFA = 5
export const TIME_IN_FORCE_GFN = 6

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
