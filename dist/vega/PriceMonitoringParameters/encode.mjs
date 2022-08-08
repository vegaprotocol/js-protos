import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as PriceMonitoringTrigger from "./../PriceMonitoringTrigger/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.triggers?.length)
    obj.triggers.forEach((v) =>
      writer.bytes(1, PriceMonitoringTrigger.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
