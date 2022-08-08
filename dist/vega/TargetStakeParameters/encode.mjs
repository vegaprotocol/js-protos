import Writer from "protobuf-codec/encode/writer.mjs"
import { int64, double } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.timeWindow) writer.varint(1, obj.timeWindow, int64)
  if (obj.scalingFactor) writer.fixed64(2, obj.scalingFactor, double)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
