/// autogenerated by protoc-plugin-js
import type { CompositePriceType } from './CompositePriceType'
import type { CompositePriceState } from './CompositePriceState'

export * from './PerpetualData/encode.js'
export * from './PerpetualData/decode.js'

export type PerpetualData = {
  fundingPayment: string
  fundingRate: string
  internalTwap: string
  externalTwap: string
  seqNum: bigint
  startTime: bigint
  internalCompositePrice: string
  nextInternalCompositePriceCalc: bigint
  internalCompositePriceType: CompositePriceType
  underlyingIndexPrice: string
  internalCompositePriceState: CompositePriceState
}
