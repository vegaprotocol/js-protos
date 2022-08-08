import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64 } from "protobuf-codec/encode/types.mjs"
import * as PriceLevel from "./../PriceLevel/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.buy?.length)
    obj.buy.forEach((v) => writer.bytes(2, PriceLevel.encode(v)))
  if (obj.sell?.length)
    obj.sell.forEach((v) => writer.bytes(3, PriceLevel.encode(v)))
  if (obj.sequenceNumber) writer.varint(4, obj.sequenceNumber, uint64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
