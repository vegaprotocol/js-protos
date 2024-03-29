/// autogenerated by protoc-plugin-js
import type { DataSourceDefinition } from './DataSourceDefinition'
import type { DataSourceSpecToPerpetualBinding } from './DataSourceSpecToPerpetualBinding'
import type { CompositePriceConfiguration } from './CompositePriceConfiguration'

export * from './PerpetualProduct/encode.js'
export * from './PerpetualProduct/decode.js'

export type PerpetualProduct = {
  settlementAsset: string
  quoteName: string
  marginFundingFactor: string
  interestRate: string
  clampLowerBound: string
  clampUpperBound: string
  dataSourceSpecForSettlementSchedule: DataSourceDefinition
  dataSourceSpecForSettlementData: DataSourceDefinition
  dataSourceSpecBinding: DataSourceSpecToPerpetualBinding
  fundingRateScalingFactor: string | null
  fundingRateLowerBound: string | null
  fundingRateUpperBound: string | null
  internalCompositePriceConfiguration: CompositePriceConfiguration | null
}
