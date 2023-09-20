/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const INDIVIDUAL_SCOPE_UNSPECIFIED = 0
export const INDIVIDUAL_SCOPE_ALL = 1
export const INDIVIDUAL_SCOPE_IN_TEAM = 2
export const INDIVIDUAL_SCOPE_NOT_IN_TEAM = 3

export type Values = 0 | 1 | 2 | 3
export type Names =
  | 'INDIVIDUAL_SCOPE_UNSPECIFIED'
  | 'INDIVIDUAL_SCOPE_ALL'
  | 'INDIVIDUAL_SCOPE_IN_TEAM'
  | 'INDIVIDUAL_SCOPE_NOT_IN_TEAM'

export const enum IndividualScope {
  INDIVIDUAL_SCOPE_UNSPECIFIED = 0,
  INDIVIDUAL_SCOPE_ALL = 1,
  INDIVIDUAL_SCOPE_IN_TEAM = 2,
  INDIVIDUAL_SCOPE_NOT_IN_TEAM = 3
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
