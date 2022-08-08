import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64, string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.upgradeBlockHeight) writer.varint(1, obj.upgradeBlockHeight, uint64)
  if (obj.vegaReleaseTag) writer.bytes(2, obj.vegaReleaseTag, string)
  if (obj.dataNodeReleaseTag) writer.bytes(3, obj.dataNodeReleaseTag, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
