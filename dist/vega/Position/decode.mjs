import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let marketId = {}
  let partyId = {}
  let openVolume = 0n
  let realisedPnl = {}
  let unrealisedPnl = {}
  let averageEntryPrice = {}
  let updatedAt = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        marketId = data
        break
      case 2:
        partyId = data
        break
      case 3:
        openVolume = data
        break
      case 4:
        realisedPnl = data
        break
      case 5:
        unrealisedPnl = data
        break
      case 6:
        averageEntryPrice = data
        break
      case 7:
        updatedAt = data
        break
    }
  }

  return {
    marketId,
    partyId,
    openVolume,
    realisedPnl,
    unrealisedPnl,
    averageEntryPrice,
    updatedAt,
  }
}
