import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.description) writer.bytes(1, obj.description, string)
  if (obj.hash) writer.bytes(2, obj.hash, string)
  if (obj.url) writer.bytes(3, obj.url, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
