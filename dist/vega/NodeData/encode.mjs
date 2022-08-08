import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint32, float } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.stakedTotal) writer.bytes(1, obj.stakedTotal, string)
  if (obj.totalNodes) writer.varint(2, obj.totalNodes, uint32)
  if (obj.inactiveNodes) writer.varint(3, obj.inactiveNodes, uint32)
  if (obj.validatingNodes) writer.varint(4, obj.validatingNodes, uint32)
  if (obj.uptime) writer.fixed32(5, obj.uptime, float)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
