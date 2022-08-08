import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as Order from "./../Order/encode.mjs"
import * as Trade from "./../Trade/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.order) writer.bytes(1, Order.encode(obj.order))
  if (obj.trades?.length)
    obj.trades.forEach((v) => writer.bytes(2, Trade.encode(v)))
  if (obj.passiveOrdersAffected?.length)
    obj.passiveOrdersAffected.forEach((v) => writer.bytes(3, Order.encode(v)))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
