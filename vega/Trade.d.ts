/// autogenerated by protoc-plugin-js
import type { Side } from './Side'
import type { Type } from './Trade/Type'
import type { Fee } from './Fee'

export * from './Trade/encode.js'
export * from './Trade/decode.js'
export * as Type from './Trade/Type.js'

export type Trade = {
  id: string
  marketId: string
  price: string
  size: bigint
  buyer: string
  seller: string
  aggressor: Side
  buyOrder: string
  sellOrder: string
  timestamp: bigint
  type: Type
  buyerFee: Fee
  sellerFee: Fee
  buyerAuctionBatch: bigint
  sellerAuctionBatch: bigint
  assetPrice: string
}
