/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const REJECTION_REASON_UNSPECIFIED = 0
export const REJECTION_REASON_TRADING_NOT_ALLOWED = 1
export const REJECTION_REASON_EXPIRY_IN_THE_PAST = 2
export const REJECTION_REASON_MUST_BE_REDUCE_ONLY = 3
export const REJECTION_REASON_MAX_STOP_ORDERS_PER_PARTY_REACHED = 4
export const REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_WITHOUT_A_POSITION = 5
export const REJECTION_REASON_STOP_ORDER_NOT_CLOSING_THE_POSITION = 6
export const REJECTION_REASON_STOP_ORDER_LINKED_PERCENTAGE_INVALID = 7
export const REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_DURING_OPENING_AUCTION = 8
export const REJECTION_REASON_STOP_ORDER_CANNOT_MATCH_OCO_EXPIRY_TIMES = 9

export type Values = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Names =
  | 'REJECTION_REASON_UNSPECIFIED'
  | 'REJECTION_REASON_TRADING_NOT_ALLOWED'
  | 'REJECTION_REASON_EXPIRY_IN_THE_PAST'
  | 'REJECTION_REASON_MUST_BE_REDUCE_ONLY'
  | 'REJECTION_REASON_MAX_STOP_ORDERS_PER_PARTY_REACHED'
  | 'REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_WITHOUT_A_POSITION'
  | 'REJECTION_REASON_STOP_ORDER_NOT_CLOSING_THE_POSITION'
  | 'REJECTION_REASON_STOP_ORDER_LINKED_PERCENTAGE_INVALID'
  | 'REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_DURING_OPENING_AUCTION'
  | 'REJECTION_REASON_STOP_ORDER_CANNOT_MATCH_OCO_EXPIRY_TIMES'

export const enum RejectionReason {
  REJECTION_REASON_UNSPECIFIED = 0,
  REJECTION_REASON_TRADING_NOT_ALLOWED = 1,
  REJECTION_REASON_EXPIRY_IN_THE_PAST = 2,
  REJECTION_REASON_MUST_BE_REDUCE_ONLY = 3,
  REJECTION_REASON_MAX_STOP_ORDERS_PER_PARTY_REACHED = 4,
  REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_WITHOUT_A_POSITION = 5,
  REJECTION_REASON_STOP_ORDER_NOT_CLOSING_THE_POSITION = 6,
  REJECTION_REASON_STOP_ORDER_LINKED_PERCENTAGE_INVALID = 7,
  REJECTION_REASON_STOP_ORDER_NOT_ALLOWED_DURING_OPENING_AUCTION = 8,
  REJECTION_REASON_STOP_ORDER_CANNOT_MATCH_OCO_EXPIRY_TIMES = 9
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
