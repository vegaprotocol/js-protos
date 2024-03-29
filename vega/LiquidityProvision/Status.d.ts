/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const STATUS_UNSPECIFIED = 0
export const STATUS_ACTIVE = 1
export const STATUS_STOPPED = 2
export const STATUS_CANCELLED = 3
export const STATUS_REJECTED = 4
export const STATUS_UNDEPLOYED = 5
export const STATUS_PENDING = 6

export type Values = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type Names =
  | 'STATUS_UNSPECIFIED'
  | 'STATUS_ACTIVE'
  | 'STATUS_STOPPED'
  | 'STATUS_CANCELLED'
  | 'STATUS_REJECTED'
  | 'STATUS_UNDEPLOYED'
  | 'STATUS_PENDING'

export const enum Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_ACTIVE = 1,
  STATUS_STOPPED = 2,
  STATUS_CANCELLED = 3,
  STATUS_REJECTED = 4,
  STATUS_UNDEPLOYED = 5,
  STATUS_PENDING = 6
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
