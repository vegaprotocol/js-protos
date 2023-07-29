/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { int64, string, uint64 } = require('protobuf-codec/encode/types')
const _vega_Interval = require('./../Interval.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.timestamp) writer.varint(1, obj.timestamp, int64)
  if (obj.datetime) writer.bytes(2, obj.datetime, string)
  if (obj.high) writer.bytes(3, obj.high, string)
  if (obj.low) writer.bytes(4, obj.low, string)
  if (obj.open) writer.bytes(5, obj.open, string)
  if (obj.close) writer.bytes(6, obj.close, string)
  if (obj.volume) writer.varint(7, obj.volume, uint64)
  if (obj.interval) writer.varint(8, obj.interval, _vega_Interval)
  if (obj.notional) writer.varint(9, obj.notional, uint64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
