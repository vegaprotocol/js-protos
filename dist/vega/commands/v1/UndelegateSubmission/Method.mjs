import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "METHOD_UNSPECIFIED"],
  [1, "METHOD_NOW"],
  [2, "METHOD_AT_END_OF_EPOCH"],
  [3, "METHOD_IN_ANGER"],
])

export const METHOD_UNSPECIFIED = 0
export const METHOD_NOW = 1
export const METHOD_AT_END_OF_EPOCH = 2
export const METHOD_IN_ANGER = 3

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
