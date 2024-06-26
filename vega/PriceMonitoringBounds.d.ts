/// autogenerated by protoc-plugin-js
import type { PriceMonitoringTrigger } from './PriceMonitoringTrigger'

export * from './PriceMonitoringBounds/encode.js'
export * from './PriceMonitoringBounds/decode.js'

export type PriceMonitoringBounds = {
  minValidPrice: string
  maxValidPrice: string
  trigger: PriceMonitoringTrigger
  referencePrice: string
  active: boolean
}
