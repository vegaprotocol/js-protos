import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "STATE_UNSPECIFIED"],
  [1, "STATE_PROPOSED"],
  [2, "STATE_REJECTED"],
  [3, "STATE_PENDING"],
  [4, "STATE_CANCELLED"],
  [5, "STATE_ACTIVE"],
  [6, "STATE_SUSPENDED"],
  [7, "STATE_CLOSED"],
  [8, "STATE_TRADING_TERMINATED"],
  [9, "STATE_SETTLED"],
])

export const STATE_UNSPECIFIED = 0
export const STATE_PROPOSED = 1
export const STATE_REJECTED = 2
export const STATE_PENDING = 3
export const STATE_CANCELLED = 4
export const STATE_ACTIVE = 5
export const STATE_SUSPENDED = 6
export const STATE_CLOSED = 7
export const STATE_TRADING_TERMINATED = 8
export const STATE_SETTLED = 9

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 9) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
