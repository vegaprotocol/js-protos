/// autogenerated by protoc-plugin-js
import type { TradableInstrument } from './TradableInstrument'
import type { Fees } from './Fees'
import type { AuctionDuration } from './AuctionDuration'
import type { PriceMonitoringSettings } from './PriceMonitoringSettings'
import type { LiquidityMonitoringParameters } from './LiquidityMonitoringParameters'
import type { TradingMode } from './Market/TradingMode'
import type { State } from './Market/State'
import type { MarketTimestamps } from './MarketTimestamps'
import type { LiquiditySLAParameters } from './LiquiditySLAParameters'
import type { LiquidationStrategy } from './LiquidationStrategy'
import type { CompositePriceConfiguration } from './CompositePriceConfiguration'

export * from './Market/encode.js'
export * from './Market/decode.js'
export * as State from './Market/State.js'
export * as TradingMode from './Market/TradingMode.js'

export type Market = {
  id: string
  tradableInstrument: TradableInstrument
  decimalPlaces: bigint
  fees: Fees
  openingAuction: AuctionDuration
  priceMonitoringSettings: PriceMonitoringSettings
  liquidityMonitoringParameters: LiquidityMonitoringParameters
  tradingMode: TradingMode
  state: State
  marketTimestamps: MarketTimestamps
  positionDecimalPlaces: bigint
  lpPriceRange: string
  linearSlippageFactor: string
  quadraticSlippageFactor: string
  parentMarketId: string | null
  insurancePoolFraction: string | null
  successorMarketId: string | null
  liquiditySlaParams: LiquiditySLAParameters | null
  liquidationStrategy: LiquidationStrategy
  markPriceConfiguration: CompositePriceConfiguration
  tickSize: string
  enableTransactionReordering: boolean
  allowedEmptyAmmLevels: bigint
  allowedSellers: string[]
}
