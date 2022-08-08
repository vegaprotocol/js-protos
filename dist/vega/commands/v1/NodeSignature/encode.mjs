import Writer from "protobuf-codec/encode/writer.mjs"
import { string, bytes } from "protobuf-codec/encode/types.mjs"
import * as NodeSignatureKind from "./../NodeSignatureKind.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.sig) writer.bytes(2, obj.sig, bytes)
  if (obj.kind) writer.varint(3, obj.kind, NodeSignatureKind)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
