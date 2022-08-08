import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64, string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.targetBlock) writer.varint(1, obj.targetBlock, uint64)
  if (obj.newAddress) writer.bytes(2, obj.newAddress, string)
  if (obj.currentAddress) writer.bytes(3, obj.currentAddress, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
