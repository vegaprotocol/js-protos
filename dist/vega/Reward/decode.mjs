import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let assetId = {}
  let partyId = {}
  let epoch = 0n
  let amount = {}
  let percentageOfTotal = {}
  let receivedAt = 0n
  let marketId = {}
  let rewardType = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        assetId = data
        break
      case 2:
        partyId = data
        break
      case 3:
        epoch = data
        break
      case 4:
        amount = data
        break
      case 5:
        percentageOfTotal = data
        break
      case 6:
        receivedAt = data
        break
      case 7:
        marketId = data
        break
      case 8:
        rewardType = data
        break
    }
  }

  return {
    assetId,
    partyId,
    epoch,
    amount,
    percentageOfTotal,
    receivedAt,
    marketId,
    rewardType,
  }
}
