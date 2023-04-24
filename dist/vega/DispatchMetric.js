/// autogenerated by protoc-plugin-js
import assert from 'nanoassert'
import { enumerable } from 'protobuf-codec/encode/types'
import { enumerable as decodeEnumerable } from 'protobuf-codec/decode/types'

export const DISPATCH_METRIC_UNSPECIFIED = 0
export const DISPATCH_METRIC_MAKER_FEES_PAID = 1
export const DISPATCH_METRIC_MAKER_FEES_RECEIVED = 2
export const DISPATCH_METRIC_LP_FEES_RECEIVED = 3
export const DISPATCH_METRIC_MARKET_VALUE = 4

const enumValues = new Map([
  [0, 'DISPATCH_METRIC_UNSPECIFIED'],
  [1, 'DISPATCH_METRIC_MAKER_FEES_PAID'],
  [2, 'DISPATCH_METRIC_MAKER_FEES_RECEIVED'],
  [3, 'DISPATCH_METRIC_LP_FEES_RECEIVED'],
  [4, 'DISPATCH_METRIC_MARKET_VALUE']
])
const enumNames = new Map([
  ['DISPATCH_METRIC_UNSPECIFIED', 0],
  ['DISPATCH_METRIC_MAKER_FEES_PAID', 1],
  ['DISPATCH_METRIC_MAKER_FEES_RECEIVED', 2],
  ['DISPATCH_METRIC_LP_FEES_RECEIVED', 3],
  ['DISPATCH_METRIC_MARKET_VALUE', 4]
])

export function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid DispatchMetric value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

export function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

export function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid DispatchMetric value (' + value + ')')

  if (0 <= value && value <= 4) return 1

  // enumerable max value in case of unknown value
  return 5
}

/**
 * Convert an enum value to it's human readable name.
 * Returns undefined on an unknown value.
 */
export function stringify(int) {
  return enumValues.get(int)
}

/**
 * Convert an enum string names to it's machine integer value.
 * Returns undefined on an unknown name.
 */
export function parse(str) {
  return enumNames.get(str)
}
