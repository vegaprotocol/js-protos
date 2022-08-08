import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.price) writer.bytes(1, obj.price, string)
  if (obj.numberOfOrders) writer.varint(2, obj.numberOfOrders, uint64)
  if (obj.volume) writer.varint(3, obj.volume, uint64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
