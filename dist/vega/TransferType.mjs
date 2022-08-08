import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "TRANSFER_TYPE_UNSPECIFIED"],
  [1, "TRANSFER_TYPE_LOSS"],
  [2, "TRANSFER_TYPE_WIN"],
  [3, "TRANSFER_TYPE_CLOSE"],
  [4, "TRANSFER_TYPE_MTM_LOSS"],
  [5, "TRANSFER_TYPE_MTM_WIN"],
  [6, "TRANSFER_TYPE_MARGIN_LOW"],
  [7, "TRANSFER_TYPE_MARGIN_HIGH"],
  [8, "TRANSFER_TYPE_MARGIN_CONFISCATED"],
  [9, "TRANSFER_TYPE_MAKER_FEE_PAY"],
  [10, "TRANSFER_TYPE_MAKER_FEE_RECEIVE"],
  [11, "TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY"],
  [12, "TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE"],
  [13, "TRANSFER_TYPE_LIQUIDITY_FEE_PAY"],
  [14, "TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE"],
  [15, "TRANSFER_TYPE_BOND_LOW"],
  [16, "TRANSFER_TYPE_BOND_HIGH"],
  [17, "TRANSFER_TYPE_WITHDRAW_LOCK"],
  [18, "TRANSFER_TYPE_WITHDRAW"],
  [19, "TRANSFER_TYPE_DEPOSIT"],
  [20, "TRANSFER_TYPE_BOND_SLASHING"],
  [21, "TRANSFER_TYPE_STAKE_REWARD"],
  [22, "TRANSFER_TYPE_TRANSFER_FUNDS_SEND"],
  [23, "TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE"],
])

export const TRANSFER_TYPE_UNSPECIFIED = 0
export const TRANSFER_TYPE_LOSS = 1
export const TRANSFER_TYPE_WIN = 2
export const TRANSFER_TYPE_CLOSE = 3
export const TRANSFER_TYPE_MTM_LOSS = 4
export const TRANSFER_TYPE_MTM_WIN = 5
export const TRANSFER_TYPE_MARGIN_LOW = 6
export const TRANSFER_TYPE_MARGIN_HIGH = 7
export const TRANSFER_TYPE_MARGIN_CONFISCATED = 8
export const TRANSFER_TYPE_MAKER_FEE_PAY = 9
export const TRANSFER_TYPE_MAKER_FEE_RECEIVE = 10
export const TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY = 11
export const TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE = 12
export const TRANSFER_TYPE_LIQUIDITY_FEE_PAY = 13
export const TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE = 14
export const TRANSFER_TYPE_BOND_LOW = 15
export const TRANSFER_TYPE_BOND_HIGH = 16
export const TRANSFER_TYPE_WITHDRAW_LOCK = 17
export const TRANSFER_TYPE_WITHDRAW = 18
export const TRANSFER_TYPE_DEPOSIT = 19
export const TRANSFER_TYPE_BOND_SLASHING = 20
export const TRANSFER_TYPE_STAKE_REWARD = 21
export const TRANSFER_TYPE_TRANSFER_FUNDS_SEND = 22
export const TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE = 23

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 23) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
