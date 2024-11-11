/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const STATUS_UNSPECIFIED = 0
export const STATUS_OPEN = 1
export const STATUS_CANCELLED = 2
export const STATUS_FINALIZED = 3

export type Values = 0 | 1 | 2 | 3
export type Names =
  | 'STATUS_UNSPECIFIED'
  | 'STATUS_OPEN'
  | 'STATUS_CANCELLED'
  | 'STATUS_FINALIZED'

export const enum Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_OPEN = 1,
  STATUS_CANCELLED = 2,
  STATUS_FINALIZED = 3
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
