/// autogenerated by protoc-plugin-js
import type { State } from './Proposal/State'
import type { ProposalTerms } from './ProposalTerms'
import type { ProposalError } from './ProposalError'
import type { ProposalRationale } from './ProposalRationale'

export * from './Proposal/encode.js'
export * from './Proposal/decode.js'
export * as State from './Proposal/State.js'

export type Proposal = {
  id: string
  reference: string
  partyId: string
  state: State
  timestamp: bigint
  terms: ProposalTerms
  reason: ProposalError | null
  errorDetails: string | null
  rationale: ProposalRationale
  requiredParticipation: string
  requiredMajority: string
  requiredLiquidityProviderParticipation: string | null
  requiredLiquidityProviderMajority: string | null
}