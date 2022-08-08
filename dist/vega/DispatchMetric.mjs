import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "DISPATCH_METRIC_UNSPECIFIED"],
  [1, "DISPATCH_METRIC_TAKER_FEES_PAID"],
  [2, "DISPATCH_METRIC_MAKER_FEES_RECEIVED"],
  [3, "DISPATCH_METRIC_LP_FEES_RECEIVED"],
  [4, "DISPATCH_METRIC_MARKET_VALUE"],
])

export const DISPATCH_METRIC_UNSPECIFIED = 0
export const DISPATCH_METRIC_TAKER_FEES_PAID = 1
export const DISPATCH_METRIC_MAKER_FEES_RECEIVED = 2
export const DISPATCH_METRIC_LP_FEES_RECEIVED = 3
export const DISPATCH_METRIC_MARKET_VALUE = 4

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 4) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
