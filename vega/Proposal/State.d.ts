/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const STATE_UNSPECIFIED = 0
export const STATE_FAILED = 1
export const STATE_OPEN = 2
export const STATE_PASSED = 3
export const STATE_REJECTED = 4
export const STATE_DECLINED = 5
export const STATE_ENACTED = 6
export const STATE_WAITING_FOR_NODE_VOTE = 7

export type Values = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
export type Names =
  | 'STATE_UNSPECIFIED'
  | 'STATE_FAILED'
  | 'STATE_OPEN'
  | 'STATE_PASSED'
  | 'STATE_REJECTED'
  | 'STATE_DECLINED'
  | 'STATE_ENACTED'
  | 'STATE_WAITING_FOR_NODE_VOTE'

export const enum State {
  STATE_UNSPECIFIED = 0,
  STATE_FAILED = 1,
  STATE_OPEN = 2,
  STATE_PASSED = 3,
  STATE_REJECTED = 4,
  STATE_DECLINED = 5,
  STATE_ENACTED = 6,
  STATE_WAITING_FOR_NODE_VOTE = 7
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
