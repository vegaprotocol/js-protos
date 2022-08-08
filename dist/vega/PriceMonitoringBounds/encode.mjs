import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as PriceMonitoringTrigger from "./../PriceMonitoringTrigger/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.minValidPrice) writer.bytes(1, obj.minValidPrice, string)
  if (obj.maxValidPrice) writer.bytes(2, obj.maxValidPrice, string)
  if (obj.trigger) writer.bytes(3, PriceMonitoringTrigger.encode(obj.trigger))
  if (obj.referencePrice) writer.bytes(4, obj.referencePrice, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
