import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64, int64 } from "protobuf-codec/encode/types.mjs"
import * as TradingMode from "./../Market/TradingMode.mjs"
import * as AuctionTrigger from "./../AuctionTrigger.mjs"
import * as PriceMonitoringBounds from "./../PriceMonitoringBounds/encode.mjs"
import * as LiquidityProviderFeeShare from "./../LiquidityProviderFeeShare/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.markPrice) writer.bytes(1, obj.markPrice, string)
  if (obj.bestBidPrice) writer.bytes(2, obj.bestBidPrice, string)
  if (obj.bestBidVolume) writer.varint(3, obj.bestBidVolume, uint64)
  if (obj.bestOfferPrice) writer.bytes(4, obj.bestOfferPrice, string)
  if (obj.bestOfferVolume) writer.varint(5, obj.bestOfferVolume, uint64)
  if (obj.bestStaticBidPrice) writer.bytes(6, obj.bestStaticBidPrice, string)
  if (obj.bestStaticBidVolume) writer.varint(7, obj.bestStaticBidVolume, uint64)
  if (obj.bestStaticOfferPrice)
    writer.bytes(8, obj.bestStaticOfferPrice, string)
  if (obj.bestStaticOfferVolume)
    writer.varint(9, obj.bestStaticOfferVolume, uint64)
  if (obj.midPrice) writer.bytes(10, obj.midPrice, string)
  if (obj.staticMidPrice) writer.bytes(11, obj.staticMidPrice, string)
  if (obj.market) writer.bytes(12, obj.market, string)
  if (obj.timestamp) writer.varint(13, obj.timestamp, int64)
  if (obj.openInterest) writer.varint(14, obj.openInterest, uint64)
  if (obj.auctionEnd) writer.varint(15, obj.auctionEnd, int64)
  if (obj.auctionStart) writer.varint(16, obj.auctionStart, int64)
  if (obj.indicativePrice) writer.bytes(17, obj.indicativePrice, string)
  if (obj.indicativeVolume) writer.varint(18, obj.indicativeVolume, uint64)
  if (obj.marketTradingMode)
    writer.varint(19, obj.marketTradingMode, TradingMode)
  if (obj.trigger) writer.varint(20, obj.trigger, AuctionTrigger)
  if (obj.extensionTrigger)
    writer.varint(21, obj.extensionTrigger, AuctionTrigger)
  if (obj.targetStake) writer.bytes(22, obj.targetStake, string)
  if (obj.suppliedStake) writer.bytes(23, obj.suppliedStake, string)
  if (obj.priceMonitoringBounds?.length)
    obj.priceMonitoringBounds.forEach((v) =>
      writer.bytes(24, PriceMonitoringBounds.encode(v))
    )
  if (obj.marketValueProxy) writer.bytes(25, obj.marketValueProxy, string)
  if (obj.liquidityProviderFeeShare?.length)
    obj.liquidityProviderFeeShare.forEach((v) =>
      writer.bytes(26, LiquidityProviderFeeShare.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
