import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "INTERVAL_UNSPECIFIED"],
  [60, "INTERVAL_I1M"],
  [300, "INTERVAL_I5M"],
  [900, "INTERVAL_I15M"],
  [3600, "INTERVAL_I1H"],
  [21600, "INTERVAL_I6H"],
  [86400, "INTERVAL_I1D"],
])

export const INTERVAL_UNSPECIFIED = 0
export const INTERVAL_I1M = 60
export const INTERVAL_I5M = 300
export const INTERVAL_I15M = 900
export const INTERVAL_I1H = 3600
export const INTERVAL_I6H = 21600
export const INTERVAL_I1D = 86400

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 86400) return 3
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
