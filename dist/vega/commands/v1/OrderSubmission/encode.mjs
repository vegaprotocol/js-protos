import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64, int64 } from "protobuf-codec/encode/types.mjs"
import * as Side from "./../../../Side.mjs"
import * as TimeInForce from "./../../../Order/TimeInForce.mjs"
import * as Type from "./../../../Order/Type.mjs"
import * as PeggedOrder from "./../../../PeggedOrder/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.price) writer.bytes(2, obj.price, string)
  if (obj.size) writer.varint(3, obj.size, uint64)
  if (obj.side) writer.varint(4, obj.side, Side)
  if (obj.timeInForce) writer.varint(5, obj.timeInForce, TimeInForce)
  if (obj.expiresAt) writer.varint(6, obj.expiresAt, int64)
  if (obj.type) writer.varint(7, obj.type, Type)
  if (obj.reference) writer.bytes(8, obj.reference, string)
  if (obj.peggedOrder) writer.bytes(9, PeggedOrder.encode(obj.peggedOrder))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
