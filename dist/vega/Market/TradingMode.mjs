import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "TRADING_MODE_UNSPECIFIED"],
  [1, "TRADING_MODE_CONTINUOUS"],
  [2, "TRADING_MODE_BATCH_AUCTION"],
  [3, "TRADING_MODE_OPENING_AUCTION"],
  [4, "TRADING_MODE_MONITORING_AUCTION"],
  [5, "TRADING_MODE_NO_TRADING"],
])

export const TRADING_MODE_UNSPECIFIED = 0
export const TRADING_MODE_CONTINUOUS = 1
export const TRADING_MODE_BATCH_AUCTION = 2
export const TRADING_MODE_OPENING_AUCTION = 3
export const TRADING_MODE_MONITORING_AUCTION = 4
export const TRADING_MODE_NO_TRADING = 5

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
