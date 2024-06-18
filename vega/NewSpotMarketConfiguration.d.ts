/// autogenerated by protoc-plugin-js
import type { InstrumentConfiguration } from './InstrumentConfiguration'
import type { PriceMonitoringParameters } from './PriceMonitoringParameters'
import type { TargetStakeParameters } from './TargetStakeParameters'
import type { SimpleModelParams } from './SimpleModelParams'
import type { LogNormalRiskModel } from './LogNormalRiskModel'
import type { LiquiditySLAParameters } from './LiquiditySLAParameters'
import type { LiquidityFeeSettings } from './LiquidityFeeSettings'

export * from './NewSpotMarketConfiguration/encode.js'
export * from './NewSpotMarketConfiguration/decode.js'

export type NewSpotMarketConfiguration = {
  instrument: InstrumentConfiguration
  priceDecimalPlaces: bigint
  metadata: string[]
  priceMonitoringParameters: PriceMonitoringParameters
  targetStakeParameters: TargetStakeParameters
  riskParameters:
    | { simple: SimpleModelParams }
    | { logNormal: LogNormalRiskModel }
    | null
  sizeDecimalPlaces: bigint
  slaParams: LiquiditySLAParameters
  liquidityFeeSettings: LiquidityFeeSettings
  tickSize: string
  enableTransactionReordering: boolean
}
