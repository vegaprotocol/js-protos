import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as UpdateMarketConfiguration from "./../UpdateMarketConfiguration/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.changes)
    writer.bytes(2, UpdateMarketConfiguration.encode(obj.changes))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
