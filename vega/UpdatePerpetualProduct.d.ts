/// autogenerated by protoc-plugin-js
import type { DataSourceDefinition } from './DataSourceDefinition'
import type { DataSourceSpecToPerpetualBinding } from './DataSourceSpecToPerpetualBinding'
import type { CompositePriceConfiguration } from './CompositePriceConfiguration'

export * from './UpdatePerpetualProduct/encode.js'
export * from './UpdatePerpetualProduct/decode.js'

export type UpdatePerpetualProduct = {
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
  indexPriceConfiguration: CompositePriceConfiguration | null
}
