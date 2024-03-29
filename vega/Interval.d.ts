/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const INTERVAL_UNSPECIFIED = 0
export const INTERVAL_BLOCK = -1
export const INTERVAL_I1M = 60
export const INTERVAL_I5M = 300
export const INTERVAL_I15M = 900
export const INTERVAL_I30M = 1800
export const INTERVAL_I1H = 3600
export const INTERVAL_I4H = 14400
export const INTERVAL_I6H = 21600
export const INTERVAL_I8H = 28800
export const INTERVAL_I12H = 43200
export const INTERVAL_I1D = 86400
export const INTERVAL_I7D = 604800

export type Values =
  | 0
  | -1
  | 60
  | 300
  | 900
  | 1800
  | 3600
  | 14400
  | 21600
  | 28800
  | 43200
  | 86400
  | 604800
export type Names =
  | 'INTERVAL_UNSPECIFIED'
  | 'INTERVAL_BLOCK'
  | 'INTERVAL_I1M'
  | 'INTERVAL_I5M'
  | 'INTERVAL_I15M'
  | 'INTERVAL_I30M'
  | 'INTERVAL_I1H'
  | 'INTERVAL_I4H'
  | 'INTERVAL_I6H'
  | 'INTERVAL_I8H'
  | 'INTERVAL_I12H'
  | 'INTERVAL_I1D'
  | 'INTERVAL_I7D'

export const enum Interval {
  INTERVAL_UNSPECIFIED = 0,
  INTERVAL_BLOCK = -1,
  INTERVAL_I1M = 60,
  INTERVAL_I5M = 300,
  INTERVAL_I15M = 900,
  INTERVAL_I30M = 1800,
  INTERVAL_I1H = 3600,
  INTERVAL_I4H = 14400,
  INTERVAL_I6H = 21600,
  INTERVAL_I8H = 28800,
  INTERVAL_I12H = 43200,
  INTERVAL_I1D = 86400,
  INTERVAL_I7D = 604800
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
