import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"
import * as TimeInForce from "./../../../Order/TimeInForce.mjs"
import * as PeggedReference from "./../../../PeggedReference.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.orderId) writer.bytes(1, obj.orderId, string)
  if (obj.marketId) writer.bytes(2, obj.marketId, string)
  if (obj.sizeDelta) writer.varint(4, obj.sizeDelta, int64)
  if (obj.timeInForce) writer.varint(6, obj.timeInForce, TimeInForce)
  if (obj.peggedOffset) writer.bytes(7, obj.peggedOffset, string)
  if (obj.peggedReference)
    writer.varint(8, obj.peggedReference, PeggedReference)

  if (obj._price) {
    const _o = obj._price
    if (_o.price) writer.bytes(3, _o.price, string)
  }

  if (obj._expires_at) {
    const _o = obj._expires_at
    if (_o.expiresAt) writer.varint(5, _o.expiresAt, int64)
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
