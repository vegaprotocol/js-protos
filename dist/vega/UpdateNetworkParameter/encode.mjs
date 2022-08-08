import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as NetworkParameter from "./../NetworkParameter/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.changes) writer.bytes(1, NetworkParameter.encode(obj.changes))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
