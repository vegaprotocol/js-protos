/// autogenerated by protoc-plugin-js
import type { InstrumentConfiguration } from './InstrumentConfiguration'
import type { PriceMonitoringParameters } from './PriceMonitoringParameters'
import type { LiquidityMonitoringParameters } from './LiquidityMonitoringParameters'
import type { SimpleModelParams } from './SimpleModelParams'
import type { LogNormalRiskModel } from './LogNormalRiskModel'
import type { SuccessorConfiguration } from './SuccessorConfiguration'
import type { LiquiditySLAParameters } from './LiquiditySLAParameters'
import type { LiquidityFeeSettings } from './LiquidityFeeSettings'
import type { LiquidationStrategy } from './LiquidationStrategy'
import type { CompositePriceConfiguration } from './CompositePriceConfiguration'

export * from './NewMarketConfiguration/encode.js'
export * from './NewMarketConfiguration/decode.js'

export type NewMarketConfiguration = {
  instrument: InstrumentConfiguration
  decimalPlaces: bigint
  metadata: string[]
  priceMonitoringParameters: PriceMonitoringParameters
  liquidityMonitoringParameters: LiquidityMonitoringParameters
  riskParameters:
    | { simple: SimpleModelParams }
    | { logNormal: LogNormalRiskModel }
    | null
  positionDecimalPlaces: bigint
  lpPriceRange: string | null
  linearSlippageFactor: string
  quadraticSlippageFactor: string
  successor: SuccessorConfiguration | null
  liquiditySlaParameters: LiquiditySLAParameters
  liquidityFeeSettings: LiquidityFeeSettings
  liquidationStrategy: LiquidationStrategy
  markPriceConfiguration: CompositePriceConfiguration
  tickSize: string
  enableTransactionReordering: boolean
}
