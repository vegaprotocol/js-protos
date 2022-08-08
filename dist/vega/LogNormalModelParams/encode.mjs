import Writer from "protobuf-codec/encode/writer.mjs"
import { double } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.mu) writer.fixed64(1, obj.mu, double)
  if (obj.r) writer.fixed64(2, obj.r, double)
  if (obj.sigma) writer.fixed64(3, obj.sigma, double)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
