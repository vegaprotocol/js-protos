import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "STATE_UNSPECIFIED"],
  [1, "STATE_FAILED"],
  [2, "STATE_OPEN"],
  [3, "STATE_PASSED"],
  [4, "STATE_REJECTED"],
  [5, "STATE_DECLINED"],
  [6, "STATE_ENACTED"],
  [7, "STATE_WAITING_FOR_NODE_VOTE"],
])

export const STATE_UNSPECIFIED = 0
export const STATE_FAILED = 1
export const STATE_OPEN = 2
export const STATE_PASSED = 3
export const STATE_REJECTED = 4
export const STATE_DECLINED = 5
export const STATE_ENACTED = 6
export const STATE_WAITING_FOR_NODE_VOTE = 7

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 7) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
