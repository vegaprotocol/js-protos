/// autogenerated by protoc-plugin-js
import type { DiscountFactors } from './DiscountFactors'

export * from './VolumeBenefitTier/encode.js'
export * from './VolumeBenefitTier/decode.js'

export type VolumeBenefitTier = {
  minimumRunningNotionalTakerVolume: string
  volumeDiscountFactor: string
  volumeDiscountFactors: DiscountFactors
  tierNumber: bigint | null
}
