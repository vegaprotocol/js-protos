import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as LiquidityOrder from "./../LiquidityOrder/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.orderId) writer.bytes(1, obj.orderId, string)
  if (obj.liquidityOrder)
    writer.bytes(2, LiquidityOrder.encode(obj.liquidityOrder))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
