import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.party) writer.bytes(1, obj.party, string)
  if (obj.nodeId) writer.bytes(2, obj.nodeId, string)
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.epochSeq) writer.bytes(4, obj.epochSeq, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
