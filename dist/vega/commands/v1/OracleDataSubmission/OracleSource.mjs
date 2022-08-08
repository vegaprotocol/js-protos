import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "ORACLE_SOURCE_UNSPECIFIED"],
  [1, "ORACLE_SOURCE_OPEN_ORACLE"],
  [2, "ORACLE_SOURCE_JSON"],
])

export const ORACLE_SOURCE_UNSPECIFIED = 0
export const ORACLE_SOURCE_OPEN_ORACLE = 1
export const ORACLE_SOURCE_JSON = 2

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
