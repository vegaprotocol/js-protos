/// autogenerated by protoc-plugin-js
import type { NodeSignatureKind } from './NodeSignatureKind'

export * from './NodeSignature/encode.js'
export * from './NodeSignature/decode.js'

export type NodeSignature = {
  id: string
  sig: Uint8Array
  kind: NodeSignatureKind
}
