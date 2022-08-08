import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.partyId) writer.bytes(2, obj.partyId, string)
  if (obj.openVolume) writer.varint(3, obj.openVolume, int64)
  if (obj.realisedPnl) writer.bytes(4, obj.realisedPnl, string)
  if (obj.unrealisedPnl) writer.bytes(5, obj.unrealisedPnl, string)
  if (obj.averageEntryPrice) writer.bytes(6, obj.averageEntryPrice, string)
  if (obj.updatedAt) writer.varint(7, obj.updatedAt, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
