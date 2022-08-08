import Writer from "protobuf-codec/encode/writer.mjs"
import { int64, uint64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.duration) writer.varint(1, obj.duration, int64)
  if (obj.volume) writer.varint(2, obj.volume, uint64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
