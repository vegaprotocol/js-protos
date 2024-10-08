/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const DISTRIBUTION_STRATEGY_UNSPECIFIED = 0
export const DISTRIBUTION_STRATEGY_PRO_RATA = 1
export const DISTRIBUTION_STRATEGY_RANK = 2
export const DISTRIBUTION_STRATEGY_RANK_LOTTERY = 3

export type Values = 0 | 1 | 2 | 3
export type Names =
  | 'DISTRIBUTION_STRATEGY_UNSPECIFIED'
  | 'DISTRIBUTION_STRATEGY_PRO_RATA'
  | 'DISTRIBUTION_STRATEGY_RANK'
  | 'DISTRIBUTION_STRATEGY_RANK_LOTTERY'

export const enum DistributionStrategy {
  DISTRIBUTION_STRATEGY_UNSPECIFIED = 0,
  DISTRIBUTION_STRATEGY_PRO_RATA = 1,
  DISTRIBUTION_STRATEGY_RANK = 2,
  DISTRIBUTION_STRATEGY_RANK_LOTTERY = 3
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
