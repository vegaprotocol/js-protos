import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as NewMarketConfiguration from "./../NewMarketConfiguration/encode.mjs"
import * as NewMarketCommitment from "./../NewMarketCommitment/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.changes) writer.bytes(1, NewMarketConfiguration.encode(obj.changes))
  if (obj.liquidityCommitment)
    writer.bytes(2, NewMarketCommitment.encode(obj.liquidityCommitment))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
