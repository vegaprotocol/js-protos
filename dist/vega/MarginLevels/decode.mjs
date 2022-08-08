import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let maintenanceMargin = {}
  let searchLevel = {}
  let initialMargin = {}
  let collateralReleaseLevel = {}
  let partyId = {}
  let marketId = {}
  let asset = {}
  let timestamp = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        maintenanceMargin = data
        break
      case 2:
        searchLevel = data
        break
      case 3:
        initialMargin = data
        break
      case 4:
        collateralReleaseLevel = data
        break
      case 5:
        partyId = data
        break
      case 6:
        marketId = data
        break
      case 7:
        asset = data
        break
      case 8:
        timestamp = data
        break
    }
  }

  return {
    maintenanceMargin,
    searchLevel,
    initialMargin,
    collateralReleaseLevel,
    partyId,
    marketId,
    asset,
    timestamp,
  }
}
