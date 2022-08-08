import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as KeyValueBundle from "./../KeyValueBundle/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.stateVarId) writer.bytes(1, obj.stateVarId, string)
  if (obj.eventId) writer.bytes(2, obj.eventId, string)
  if (obj.kvb?.length)
    obj.kvb.forEach((v) => writer.bytes(3, KeyValueBundle.encode(v)))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
