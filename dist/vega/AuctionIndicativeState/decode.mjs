import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let marketId = {}
  let indicativePrice = {}
  let indicativeVolume = 0n
  let auctionStart = 0n
  let auctionEnd = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        marketId = data
        break
      case 2:
        indicativePrice = data
        break
      case 3:
        indicativeVolume = data
        break
      case 4:
        auctionStart = data
        break
      case 5:
        auctionEnd = data
        break
    }
  }

  return {
    marketId,
    indicativePrice,
    indicativeVolume,
    auctionStart,
    auctionEnd,
  }
}
