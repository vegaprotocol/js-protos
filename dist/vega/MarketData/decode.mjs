import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64, int64 } from "protobuf-codec/decode/types.mjs"
import * as TradingMode from "./../Market/TradingMode.mjs"
import * as AuctionTrigger from "./../AuctionTrigger.mjs"
import * as PriceMonitoringBounds from "./../PriceMonitoringBounds/decode.mjs"
import * as LiquidityProviderFeeShare from "./../LiquidityProviderFeeShare/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let markPrice = {}
  let bestBidPrice = {}
  let bestBidVolume = 0n
  let bestOfferPrice = {}
  let bestOfferVolume = 0n
  let bestStaticBidPrice = {}
  let bestStaticBidVolume = 0n
  let bestStaticOfferPrice = {}
  let bestStaticOfferVolume = 0n
  let midPrice = {}
  let staticMidPrice = {}
  let market = {}
  let timestamp = 0n
  let openInterest = 0n
  let auctionEnd = 0n
  let auctionStart = 0n
  let indicativePrice = {}
  let indicativeVolume = 0n
  let marketTradingMode = 0
  let trigger = 0
  let extensionTrigger = 0
  let targetStake = {}
  let suppliedStake = {}
  const priceMonitoringBounds = []
  let marketValueProxy = {}
  const liquidityProviderFeeShare = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        markPrice = data
        break
      case 2:
        bestBidPrice = data
        break
      case 3:
        bestBidVolume = data
        break
      case 4:
        bestOfferPrice = data
        break
      case 5:
        bestOfferVolume = data
        break
      case 6:
        bestStaticBidPrice = data
        break
      case 7:
        bestStaticBidVolume = data
        break
      case 8:
        bestStaticOfferPrice = data
        break
      case 9:
        bestStaticOfferVolume = data
        break
      case 10:
        midPrice = data
        break
      case 11:
        staticMidPrice = data
        break
      case 12:
        market = data
        break
      case 13:
        timestamp = data
        break
      case 14:
        openInterest = data
        break
      case 15:
        auctionEnd = data
        break
      case 16:
        auctionStart = data
        break
      case 17:
        indicativePrice = data
        break
      case 18:
        indicativeVolume = data
        break
      case 19:
        marketTradingMode = data
        break
      case 20:
        trigger = data
        break
      case 21:
        extensionTrigger = data
        break
      case 22:
        targetStake = data
        break
      case 23:
        suppliedStake = data
        break
      case 24:
        priceMonitoringBounds.push(data)
        break
      case 25:
        marketValueProxy = data
        break
      case 26:
        liquidityProviderFeeShare.push(data)
        break
    }
  }

  return {
    markPrice,
    bestBidPrice,
    bestBidVolume,
    bestOfferPrice,
    bestOfferVolume,
    bestStaticBidPrice,
    bestStaticBidVolume,
    bestStaticOfferPrice,
    bestStaticOfferVolume,
    midPrice,
    staticMidPrice,
    market,
    timestamp,
    openInterest,
    auctionEnd,
    auctionStart,
    indicativePrice,
    indicativeVolume,
    marketTradingMode,
    trigger,
    extensionTrigger,
    targetStake,
    suppliedStake,
    priceMonitoringBounds,
    marketValueProxy,
    liquidityProviderFeeShare,
  }
}
