import Writer from "protobuf-codec/encode/writer.mjs"
import { int64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.proposed) writer.varint(1, obj.proposed, int64)
  if (obj.pending) writer.varint(2, obj.pending, int64)
  if (obj.open) writer.varint(3, obj.open, int64)
  if (obj.close) writer.varint(4, obj.close, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
