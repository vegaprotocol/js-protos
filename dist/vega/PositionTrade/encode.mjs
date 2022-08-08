import Writer from "protobuf-codec/encode/writer.mjs"
import { int64, string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.volume) writer.varint(1, obj.volume, int64)
  if (obj.price) writer.bytes(2, obj.price, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
