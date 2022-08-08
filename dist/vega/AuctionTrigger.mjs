import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "AUCTION_TRIGGER_UNSPECIFIED"],
  [1, "AUCTION_TRIGGER_BATCH"],
  [2, "AUCTION_TRIGGER_OPENING"],
  [3, "AUCTION_TRIGGER_PRICE"],
  [4, "AUCTION_TRIGGER_LIQUIDITY"],
])

export const AUCTION_TRIGGER_UNSPECIFIED = 0
export const AUCTION_TRIGGER_BATCH = 1
export const AUCTION_TRIGGER_OPENING = 2
export const AUCTION_TRIGGER_PRICE = 3
export const AUCTION_TRIGGER_LIQUIDITY = 4

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
