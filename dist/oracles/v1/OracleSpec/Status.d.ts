export const STATUS_UNSPECIFIED: 0
export const STATUS_ACTIVE: 1
export const STATUS_DEACTIVATED: 2
export type Status =
  | 'STATUS_UNSPECIFIED'
  | typeof STATUS_UNSPECIFIED
  | 'STATUS_ACTIVE'
  | typeof STATUS_ACTIVE
  | 'STATUS_DEACTIVATED'
  | typeof STATUS_DEACTIVATED
export function encode(
  value: Status,
  buf: Uint8Array,
  byteOffset?: number
): Uint8Array
export function encodingLength(value: Status): number
export function decode(
  varint: bigint
): 'STATUS_UNSPECIFIED' | 'STATUS_ACTIVE' | 'STATUS_DEACTIVATED' | number
export function string(
  value: 0 | 1 | 2
): 'STATUS_UNSPECIFIED' | 'STATUS_ACTIVE' | 'STATUS_DEACTIVATED'
