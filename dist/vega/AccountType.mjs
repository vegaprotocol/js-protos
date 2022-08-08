import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "ACCOUNT_TYPE_UNSPECIFIED"],
  [1, "ACCOUNT_TYPE_INSURANCE"],
  [2, "ACCOUNT_TYPE_SETTLEMENT"],
  [3, "ACCOUNT_TYPE_MARGIN"],
  [4, "ACCOUNT_TYPE_GENERAL"],
  [5, "ACCOUNT_TYPE_FEES_INFRASTRUCTURE"],
  [6, "ACCOUNT_TYPE_FEES_LIQUIDITY"],
  [7, "ACCOUNT_TYPE_FEES_MAKER"],
  [9, "ACCOUNT_TYPE_BOND"],
  [10, "ACCOUNT_TYPE_EXTERNAL"],
  [11, "ACCOUNT_TYPE_GLOBAL_INSURANCE"],
  [12, "ACCOUNT_TYPE_GLOBAL_REWARD"],
  [13, "ACCOUNT_TYPE_PENDING_TRANSFERS"],
  [14, "ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES"],
  [15, "ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES"],
  [16, "ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES"],
  [17, "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS"],
])

export const ACCOUNT_TYPE_UNSPECIFIED = 0
export const ACCOUNT_TYPE_INSURANCE = 1
export const ACCOUNT_TYPE_SETTLEMENT = 2
export const ACCOUNT_TYPE_MARGIN = 3
export const ACCOUNT_TYPE_GENERAL = 4
export const ACCOUNT_TYPE_FEES_INFRASTRUCTURE = 5
export const ACCOUNT_TYPE_FEES_LIQUIDITY = 6
export const ACCOUNT_TYPE_FEES_MAKER = 7
export const ACCOUNT_TYPE_BOND = 9
export const ACCOUNT_TYPE_EXTERNAL = 10
export const ACCOUNT_TYPE_GLOBAL_INSURANCE = 11
export const ACCOUNT_TYPE_GLOBAL_REWARD = 12
export const ACCOUNT_TYPE_PENDING_TRANSFERS = 13
export const ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES = 14
export const ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES = 15
export const ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES = 16
export const ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS = 17

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 17) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
