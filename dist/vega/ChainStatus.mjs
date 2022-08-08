import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "CHAIN_STATUS_UNSPECIFIED"],
  [1, "CHAIN_STATUS_DISCONNECTED"],
  [2, "CHAIN_STATUS_REPLAYING"],
  [3, "CHAIN_STATUS_CONNECTED"],
])

export const CHAIN_STATUS_UNSPECIFIED = 0
export const CHAIN_STATUS_DISCONNECTED = 1
export const CHAIN_STATUS_REPLAYING = 2
export const CHAIN_STATUS_CONNECTED = 3

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
