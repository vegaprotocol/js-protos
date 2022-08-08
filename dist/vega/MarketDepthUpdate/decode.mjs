import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64 } from "protobuf-codec/decode/types.mjs"
import * as PriceLevel from "./../PriceLevel/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let marketId = {}
  const buy = []
  const sell = []
  let sequenceNumber = 0n
  let previousSequenceNumber = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        marketId = data
        break
      case 2:
        buy.push(data)
        break
      case 3:
        sell.push(data)
        break
      case 4:
        sequenceNumber = data
        break
      case 5:
        previousSequenceNumber = data
        break
    }
  }

  return {
    marketId,
    buy,
    sell,
    sequenceNumber,
    previousSequenceNumber,
  }
}
