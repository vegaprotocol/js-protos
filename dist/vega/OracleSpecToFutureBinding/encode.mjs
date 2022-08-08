import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.settlementPriceProperty)
    writer.bytes(1, obj.settlementPriceProperty, string)
  if (obj.tradingTerminationProperty)
    writer.bytes(2, obj.tradingTerminationProperty, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
