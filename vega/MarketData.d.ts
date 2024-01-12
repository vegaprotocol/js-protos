/// autogenerated by protoc-plugin-js
import type { TradingMode } from './Market/TradingMode'
import type { AuctionTrigger } from './AuctionTrigger'
import type { PriceMonitoringBounds } from './PriceMonitoringBounds'
import type { LiquidityProviderFeeShare } from './LiquidityProviderFeeShare'
import type { State } from './Market/State'
import type { ProductData } from './ProductData'
import type { LiquidityProviderSLA } from './LiquidityProviderSLA'

export * from './MarketData/encode.js'
export * from './MarketData/decode.js'

export type MarketData = {
  markPrice: string
  bestBidPrice: string
  bestBidVolume: bigint
  bestOfferPrice: string
  bestOfferVolume: bigint
  bestStaticBidPrice: string
  bestStaticBidVolume: bigint
  bestStaticOfferPrice: string
  bestStaticOfferVolume: bigint
  midPrice: string
  staticMidPrice: string
  market: string
  timestamp: bigint
  openInterest: bigint
  auctionEnd: bigint
  auctionStart: bigint
  indicativePrice: string
  indicativeVolume: bigint
  marketTradingMode: TradingMode
  trigger: AuctionTrigger
  extensionTrigger: AuctionTrigger
  targetStake: string
  suppliedStake: string
  priceMonitoringBounds: PriceMonitoringBounds[]
  marketValueProxy: string
  liquidityProviderFeeShare: LiquidityProviderFeeShare[]
  marketState: State
  nextMarkToMarket: bigint
  lastTradedPrice: string
  marketGrowth: string
  productData: ProductData | null
  liquidityProviderSla: LiquidityProviderSLA[]
  nextNetworkCloseout: bigint
}
