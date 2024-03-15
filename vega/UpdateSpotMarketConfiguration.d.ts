/// autogenerated by protoc-plugin-js
import type { PriceMonitoringParameters } from './PriceMonitoringParameters'
import type { TargetStakeParameters } from './TargetStakeParameters'
import type { SimpleModelParams } from './SimpleModelParams'
import type { LogNormalRiskModel } from './LogNormalRiskModel'
import type { LiquiditySLAParameters } from './LiquiditySLAParameters'
import type { LiquidityFeeSettings } from './LiquidityFeeSettings'

export * from './UpdateSpotMarketConfiguration/encode.js'
export * from './UpdateSpotMarketConfiguration/decode.js'

export type UpdateSpotMarketConfiguration = {
  metadata: string[]
  priceMonitoringParameters: PriceMonitoringParameters
  targetStakeParameters: TargetStakeParameters
  riskParameters:
    | { simple: SimpleModelParams }
    | { logNormal: LogNormalRiskModel }
    | null
  slaParams: LiquiditySLAParameters
  liquidityFeeSettings: LiquidityFeeSettings
  tickSize: string
}
