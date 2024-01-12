/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const MARGIN_MODE_UNSPECIFIED = 0
export const MARGIN_MODE_CROSS_MARGIN = 1
export const MARGIN_MODE_ISOLATED_MARGIN = 2

export type Values = 0 | 1 | 2
export type Names =
  | 'MARGIN_MODE_UNSPECIFIED'
  | 'MARGIN_MODE_CROSS_MARGIN'
  | 'MARGIN_MODE_ISOLATED_MARGIN'

export const enum MarginMode {
  MARGIN_MODE_UNSPECIFIED = 0,
  MARGIN_MODE_CROSS_MARGIN = 1,
  MARGIN_MODE_ISOLATED_MARGIN = 2
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
