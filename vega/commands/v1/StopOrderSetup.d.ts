/// autogenerated by protoc-plugin-js
import type { OrderSubmission } from './OrderSubmission'
import type { ExpiryStrategy } from './../../StopOrder/ExpiryStrategy'

export * from './StopOrderSetup/encode.js'
export * from './StopOrderSetup/decode.js'

export type StopOrderSetup = {
  orderSubmission: OrderSubmission
  expiresAt: bigint | null
  expiryStrategy: ExpiryStrategy | null
  trigger: { price: string } | { trailingPercentOffset: string } | null
}