/// autogenerated by protoc-plugin-js
import type { BatchProposalTermsChange } from './../../BatchProposalTermsChange'

export * from './BatchProposalSubmissionTerms/encode.js'
export * from './BatchProposalSubmissionTerms/decode.js'

export type BatchProposalSubmissionTerms = {
  closingTimestamp: bigint
  changes: BatchProposalTermsChange[]
}
