/// autogenerated by protoc-plugin-js

export * from './AuctionIndicativeState/encode.js'
export * from './AuctionIndicativeState/decode.js'

export type AuctionIndicativeState = {
  marketId: string
  indicativePrice: string
  indicativeVolume: bigint
  auctionStart: bigint
  auctionEnd: bigint
}
