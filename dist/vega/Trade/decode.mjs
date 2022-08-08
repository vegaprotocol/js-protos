import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64, int64 } from "protobuf-codec/decode/types.mjs"
import * as Side from "./../Side.mjs"
import * as Type from "./Type.mjs"
import * as Fee from "./../Fee/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let marketId = {}
  let price = {}
  let size = 0n
  let buyer = {}
  let seller = {}
  let aggressor = 0
  let buyOrder = {}
  let sellOrder = {}
  let timestamp = 0n
  let type = 0
  let buyerFee = {}
  let sellerFee = {}
  let buyerAuctionBatch = 0n
  let sellerAuctionBatch = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        marketId = data
        break
      case 3:
        price = data
        break
      case 4:
        size = data
        break
      case 5:
        buyer = data
        break
      case 6:
        seller = data
        break
      case 7:
        aggressor = data
        break
      case 8:
        buyOrder = data
        break
      case 9:
        sellOrder = data
        break
      case 10:
        timestamp = data
        break
      case 11:
        type = data
        break
      case 12:
        buyerFee = data
        break
      case 13:
        sellerFee = data
        break
      case 14:
        buyerAuctionBatch = data
        break
      case 15:
        sellerAuctionBatch = data
        break
    }
  }

  return {
    id,
    marketId,
    price,
    size,
    buyer,
    seller,
    aggressor,
    buyOrder,
    sellOrder,
    timestamp,
    type,
    buyerFee,
    sellerFee,
    buyerAuctionBatch,
    sellerAuctionBatch,
  }
}
