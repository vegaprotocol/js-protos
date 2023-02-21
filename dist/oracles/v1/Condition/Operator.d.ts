export const OPERATOR_UNSPECIFIED: 0
export const OPERATOR_EQUALS: 1
export const OPERATOR_GREATER_THAN: 2
export const OPERATOR_GREATER_THAN_OR_EQUAL: 3
export const OPERATOR_LESS_THAN: 4
export const OPERATOR_LESS_THAN_OR_EQUAL: 5
export type Operator =
  | 'OPERATOR_UNSPECIFIED'
  | typeof OPERATOR_UNSPECIFIED
  | 'OPERATOR_EQUALS'
  | typeof OPERATOR_EQUALS
  | 'OPERATOR_GREATER_THAN'
  | typeof OPERATOR_GREATER_THAN
  | 'OPERATOR_GREATER_THAN_OR_EQUAL'
  | typeof OPERATOR_GREATER_THAN_OR_EQUAL
  | 'OPERATOR_LESS_THAN'
  | typeof OPERATOR_LESS_THAN
  | 'OPERATOR_LESS_THAN_OR_EQUAL'
  | typeof OPERATOR_LESS_THAN_OR_EQUAL
export function encode(
  value: Operator,
  buf: Uint8Array,
  byteOffset?: number
): Uint8Array
export function encodingLength(value: Operator): number
export function decode(
  varint: bigint
):
  | 'OPERATOR_UNSPECIFIED'
  | 'OPERATOR_EQUALS'
  | 'OPERATOR_GREATER_THAN'
  | 'OPERATOR_GREATER_THAN_OR_EQUAL'
  | 'OPERATOR_LESS_THAN'
  | 'OPERATOR_LESS_THAN_OR_EQUAL'
  | number
export function string(
  value: 0 | 1 | 2 | 3 | 4 | 5
):
  | 'OPERATOR_UNSPECIFIED'
  | 'OPERATOR_EQUALS'
  | 'OPERATOR_GREATER_THAN'
  | 'OPERATOR_GREATER_THAN_OR_EQUAL'
  | 'OPERATOR_LESS_THAN'
  | 'OPERATOR_LESS_THAN_OR_EQUAL'
