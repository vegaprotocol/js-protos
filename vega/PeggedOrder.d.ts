/// autogenerated by protoc-plugin-js
import type { PeggedReference } from './PeggedReference'

export * from './PeggedOrder/encode.js'
export * from './PeggedOrder/decode.js'

export type PeggedOrder = {
  reference: PeggedReference
  offset: string
}
