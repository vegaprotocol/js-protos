/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, uint64, int64 } = require('protobuf-codec/encode/types')
const _vega_Market_TradingMode = require('./../Market/TradingMode.js')
const _vega_AuctionTrigger = require('./../AuctionTrigger.js')
const _vega_PriceMonitoringBounds = require('./../PriceMonitoringBounds/encode.js')
const _vega_LiquidityProviderFeeShare = require('./../LiquidityProviderFeeShare/encode.js')
const _vega_Market_State = require('./../Market/State.js')
const _vega_ProductData = require('./../ProductData/encode.js')
const _vega_LiquidityProviderSLA = require('./../LiquidityProviderSLA/encode.js')
const _vega_CompositePriceType = require('./../CompositePriceType.js')
const _vega_CompositePriceState = require('./../CompositePriceState/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
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
    writer.varint(19, obj.marketTradingMode, _vega_Market_TradingMode)
  if (obj.trigger) writer.varint(20, obj.trigger, _vega_AuctionTrigger)
  if (obj.extensionTrigger)
    writer.varint(21, obj.extensionTrigger, _vega_AuctionTrigger)
  if (obj.targetStake) writer.bytes(22, obj.targetStake, string)
  if (obj.suppliedStake) writer.bytes(23, obj.suppliedStake, string)
  if (obj.priceMonitoringBounds?.length)
    obj.priceMonitoringBounds.forEach((v) =>
      writer.bytes(24, _vega_PriceMonitoringBounds.encode(v))
    )
  if (obj.marketValueProxy) writer.bytes(25, obj.marketValueProxy, string)
  if (obj.liquidityProviderFeeShare?.length)
    obj.liquidityProviderFeeShare.forEach((v) =>
      writer.bytes(26, _vega_LiquidityProviderFeeShare.encode(v))
    )
  if (obj.marketState) writer.varint(27, obj.marketState, _vega_Market_State)
  if (obj.nextMarkToMarket) writer.varint(28, obj.nextMarkToMarket, int64)
  if (obj.lastTradedPrice) writer.bytes(29, obj.lastTradedPrice, string)
  if (obj.marketGrowth) writer.bytes(30, obj.marketGrowth, string)
  if (obj.productData)
    writer.bytes(31, _vega_ProductData.encode(obj.productData))
  if (obj.liquidityProviderSla?.length)
    obj.liquidityProviderSla.forEach((v) =>
      writer.bytes(32, _vega_LiquidityProviderSLA.encode(v))
    )
  if (obj.nextNetworkCloseout) writer.varint(33, obj.nextNetworkCloseout, int64)
  if (obj.markPriceType)
    writer.varint(34, obj.markPriceType, _vega_CompositePriceType)
  if (obj.markPriceState)
    writer.bytes(35, _vega_CompositePriceState.encode(obj.markPriceState))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
