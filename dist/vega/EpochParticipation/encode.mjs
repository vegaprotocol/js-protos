import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64, double } from "protobuf-codec/encode/types.mjs"
import * as Epoch from "./../Epoch/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.epoch) writer.bytes(1, Epoch.encode(obj.epoch))
  if (obj.offline) writer.varint(2, obj.offline, uint64)
  if (obj.online) writer.varint(3, obj.online, uint64)
  if (obj.totalRewards) writer.fixed64(4, obj.totalRewards, double)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
