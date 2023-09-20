/// autogenerated by protoc-plugin-js
import type { VolumeBenefitTier } from './VolumeBenefitTier'

export * from './VolumeDiscountProgram/encode.js'
export * from './VolumeDiscountProgram/decode.js'

export type VolumeDiscountProgram = {
  version: bigint
  id: string
  benefitTiers: VolumeBenefitTier[]
  endOfProgramTimestamp: bigint
  windowLength: bigint
}
