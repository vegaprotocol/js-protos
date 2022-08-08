import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "EPOCH_ACTION_UNSPECIFIED"],
  [1, "EPOCH_ACTION_START"],
  [2, "EPOCH_ACTION_END"],
])

export const EPOCH_ACTION_UNSPECIFIED = 0
export const EPOCH_ACTION_START = 1
export const EPOCH_ACTION_END = 2

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
