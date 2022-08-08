import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "NODE_STATUS_UNSPECIFIED"],
  [1, "NODE_STATUS_VALIDATOR"],
  [2, "NODE_STATUS_NON_VALIDATOR"],
])

export const NODE_STATUS_UNSPECIFIED = 0
export const NODE_STATUS_VALIDATOR = 1
export const NODE_STATUS_NON_VALIDATOR = 2

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 2) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
