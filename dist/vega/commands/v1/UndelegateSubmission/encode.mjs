import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as Method from "./Method.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.nodeId) writer.bytes(1, obj.nodeId, string)
  if (obj.amount) writer.bytes(2, obj.amount, string)
  if (obj.method) writer.varint(3, obj.method, Method)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
