import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "VALIDATOR_NODE_STATUS_UNSPECIFIED"],
  [1, "VALIDATOR_NODE_STATUS_TENDERMINT"],
  [2, "VALIDATOR_NODE_STATUS_ERSATZ"],
  [3, "VALIDATOR_NODE_STATUS_PENDING"],
])

export const VALIDATOR_NODE_STATUS_UNSPECIFIED = 0
export const VALIDATOR_NODE_STATUS_TENDERMINT = 1
export const VALIDATOR_NODE_STATUS_ERSATZ = 2
export const VALIDATOR_NODE_STATUS_PENDING = 3

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
