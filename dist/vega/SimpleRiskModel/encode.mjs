import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as SimpleModelParams from "./../SimpleModelParams/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.params) writer.bytes(1, SimpleModelParams.encode(obj.params))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
