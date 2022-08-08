import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.address) writer.bytes(1, obj.address, string)
  if (obj.deploymentBlockHeight)
    writer.varint(6, obj.deploymentBlockHeight, uint64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
