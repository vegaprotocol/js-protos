/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const EXPIRY_STRATEGY_UNSPECIFIED = 0
export const EXPIRY_STRATEGY_CANCELS = 1
export const EXPIRY_STRATEGY_SUBMIT = 2

export type Values = 0 | 1 | 2
export type Names =
  | 'EXPIRY_STRATEGY_UNSPECIFIED'
  | 'EXPIRY_STRATEGY_CANCELS'
  | 'EXPIRY_STRATEGY_SUBMIT'

export const enum ExpiryStrategy {
  EXPIRY_STRATEGY_UNSPECIFIED = 0,
  EXPIRY_STRATEGY_CANCELS = 1,
  EXPIRY_STRATEGY_SUBMIT = 2
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
