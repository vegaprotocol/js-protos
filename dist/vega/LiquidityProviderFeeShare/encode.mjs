import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.party) writer.bytes(1, obj.party, string)
  if (obj.equityLikeShare) writer.bytes(2, obj.equityLikeShare, string)
  if (obj.averageEntryValuation)
    writer.bytes(3, obj.averageEntryValuation, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
