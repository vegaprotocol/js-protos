import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as Signature from "./../Signature/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.nodeId) writer.bytes(1, obj.nodeId, string)
  if (obj.ethereumSignature)
    writer.bytes(2, Signature.encode(obj.ethereumSignature))
  if (obj.vegaSignature) writer.bytes(3, Signature.encode(obj.vegaSignature))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
