/// autogenerated by protoc-plugin-js
import type { NodeSignatureKind } from './NodeSignatureKind'

export * from './IssueSignatures/encode.js'
export * from './IssueSignatures/decode.js'

export type IssueSignatures = {
  submitter: string
  kind: NodeSignatureKind
  validatorNodeId: string
}