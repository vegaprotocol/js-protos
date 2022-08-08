import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as FeeFactors from "./../FeeFactors/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.factors) writer.bytes(1, FeeFactors.encode(obj.factors))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
