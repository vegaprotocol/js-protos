export const TYPE_UNSPECIFIED: 0
export const TYPE_EMPTY: 1
export const TYPE_INTEGER: 2
export const TYPE_STRING: 3
export const TYPE_BOOLEAN: 4
export const TYPE_DECIMAL: 5
export const TYPE_TIMESTAMP: 6
export type Type =
  | 'TYPE_UNSPECIFIED'
  | typeof TYPE_UNSPECIFIED
  | 'TYPE_EMPTY'
  | typeof TYPE_EMPTY
  | 'TYPE_INTEGER'
  | typeof TYPE_INTEGER
  | 'TYPE_STRING'
  | typeof TYPE_STRING
  | 'TYPE_BOOLEAN'
  | typeof TYPE_BOOLEAN
  | 'TYPE_DECIMAL'
  | typeof TYPE_DECIMAL
  | 'TYPE_TIMESTAMP'
  | typeof TYPE_TIMESTAMP
export function encode(
  value: Type,
  buf: Uint8Array,
  byteOffset?: number
): Uint8Array
export function encodingLength(value: Type): number
export function decode(
  varint: bigint
):
  | 'TYPE_UNSPECIFIED'
  | 'TYPE_EMPTY'
  | 'TYPE_INTEGER'
  | 'TYPE_STRING'
  | 'TYPE_BOOLEAN'
  | 'TYPE_DECIMAL'
  | 'TYPE_TIMESTAMP'
  | number
export function string(
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6
):
  | 'TYPE_UNSPECIFIED'
  | 'TYPE_EMPTY'
  | 'TYPE_INTEGER'
  | 'TYPE_STRING'
  | 'TYPE_BOOLEAN'
  | 'TYPE_DECIMAL'
  | 'TYPE_TIMESTAMP'
