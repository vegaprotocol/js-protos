/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string, uint64, int64, bool } from 'protobuf-codec/encode/types'
import * as _vega_Side from './../../../Side.js'
import * as _vega_Order_TimeInForce from './../../../Order/TimeInForce.js'
import * as _vega_Order_Type from './../../../Order/Type.js'
import * as _vega_PeggedOrder from './../../../PeggedOrder/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.price) writer.bytes(2, obj.price, string)
  if (obj.size) writer.varint(3, obj.size, uint64)
  if (obj.side) writer.varint(4, obj.side, _vega_Side)
  if (obj.timeInForce)
    writer.varint(5, obj.timeInForce, _vega_Order_TimeInForce)
  if (obj.expiresAt) writer.varint(6, obj.expiresAt, int64)
  if (obj.type) writer.varint(7, obj.type, _vega_Order_Type)
  if (obj.reference) writer.bytes(8, obj.reference, string)
  if (obj.peggedOrder)
    writer.bytes(9, _vega_PeggedOrder.encode(obj.peggedOrder))
  if (obj.postOnly) writer.varint(10, obj.postOnly, bool)
  if (obj.reduceOnly) writer.varint(11, obj.reduceOnly, bool)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
