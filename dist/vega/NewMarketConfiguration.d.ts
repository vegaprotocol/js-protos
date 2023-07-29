/// autogenerated by protoc-plugin-js
import type { InstrumentConfiguration } from './InstrumentConfiguration'
import type { PriceMonitoringParameters } from './PriceMonitoringParameters'
import type { LiquidityMonitoringParameters } from './LiquidityMonitoringParameters'
import type { SimpleModelParams } from './SimpleModelParams'
import type { LogNormalRiskModel } from './LogNormalRiskModel'
import type { SuccessorConfiguration } from './SuccessorConfiguration'

export * from './NewMarketConfiguration/encode.js'
export * from './NewMarketConfiguration/decode.js'

export type NewMarketConfiguration = {
  instrument: InstrumentConfiguration
  decimalPlaces: bigint
  metadata: string[]
  priceMonitoringParameters: PriceMonitoringParameters
  liquidityMonitoringParameters: LiquidityMonitoringParameters
  risk_parameters:
    | { simple: SimpleModelParams }
    | { logNormal: LogNormalRiskModel }
    | null
  positionDecimalPlaces: bigint
  lpPriceRange: string
  linearSlippageFactor: string
  quadraticSlippageFactor: string
  successor: SuccessorConfiguration | null
}
