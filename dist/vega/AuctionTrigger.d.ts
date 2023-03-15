/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const AUCTION_TRIGGER_UNSPECIFIED = 0
export const AUCTION_TRIGGER_BATCH = 1
export const AUCTION_TRIGGER_OPENING = 2
export const AUCTION_TRIGGER_PRICE = 3
export const AUCTION_TRIGGER_LIQUIDITY = 4
export const AUCTION_TRIGGER_LIQUIDITY_TARGET_NOT_MET = 5
export const AUCTION_TRIGGER_UNABLE_TO_DEPLOY_LP_ORDERS = 6

export type Values = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Names =
  | 'AUCTION_TRIGGER_UNSPECIFIED'
  | 'AUCTION_TRIGGER_BATCH'
  | 'AUCTION_TRIGGER_OPENING'
  | 'AUCTION_TRIGGER_PRICE'
  | 'AUCTION_TRIGGER_LIQUIDITY'
  | 'AUCTION_TRIGGER_LIQUIDITY_TARGET_NOT_MET'
  | 'AUCTION_TRIGGER_UNABLE_TO_DEPLOY_LP_ORDERS'

export const enum AuctionTrigger {
  AUCTION_TRIGGER_UNSPECIFIED = 0,
  AUCTION_TRIGGER_BATCH = 1,
  AUCTION_TRIGGER_OPENING = 2,
  AUCTION_TRIGGER_PRICE = 3,
  AUCTION_TRIGGER_LIQUIDITY = 4,
  AUCTION_TRIGGER_LIQUIDITY_TARGET_NOT_MET = 5,
  AUCTION_TRIGGER_UNABLE_TO_DEPLOY_LP_ORDERS = 6
}

declare const enumValues: Map<Names, Values>
declare const enumNames: Map<Values, Names>

export function encode(
  value: Values | Names,
  buf: Uint8Array,
  byteOffset: number
): Uint8Array

export function decode(varint: bigint): LiteralUnion<Names, number>

export function encodingLength(value: LiteralUnion<Values, number>): number

export function stringify(int: Values): LiteralUnion<Names, undefined>

export function parse(str: Names): LiteralUnion<Values, undefined>
