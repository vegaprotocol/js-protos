import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "OPERATOR_UNSPECIFIED"],
  [1, "OPERATOR_EQUALS"],
  [2, "OPERATOR_GREATER_THAN"],
  [3, "OPERATOR_GREATER_THAN_OR_EQUAL"],
  [4, "OPERATOR_LESS_THAN"],
  [5, "OPERATOR_LESS_THAN_OR_EQUAL"],
])

export const OPERATOR_UNSPECIFIED = 0
export const OPERATOR_EQUALS = 1
export const OPERATOR_GREATER_THAN = 2
export const OPERATOR_GREATER_THAN_OR_EQUAL = 3
export const OPERATOR_LESS_THAN = 4
export const OPERATOR_LESS_THAN_OR_EQUAL = 5

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 5) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
