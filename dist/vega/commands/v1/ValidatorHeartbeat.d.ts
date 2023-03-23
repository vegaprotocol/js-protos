/// autogenerated by protoc-plugin-js
import type { Signature } from './Signature'

export * from './ValidatorHeartbeat/encode.js'
export * from './ValidatorHeartbeat/decode.js'

export type ValidatorHeartbeat = {
  nodeId: string
  ethereumSignature: Signature
  vegaSignature: Signature
  message: string
}
