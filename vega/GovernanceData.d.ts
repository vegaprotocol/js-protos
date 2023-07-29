/// autogenerated by protoc-plugin-js
import type { Proposal } from './Proposal'
import type { Vote } from './Vote'
import type { YesPartyEntry } from './GovernanceData/YesPartyEntry'
import type { NoPartyEntry } from './GovernanceData/NoPartyEntry'

export * from './GovernanceData/encode.js'
export * from './GovernanceData/decode.js'

export * as YesPartyEntry from './GovernanceData/YesPartyEntry.js'
export * as NoPartyEntry from './GovernanceData/NoPartyEntry.js'

export type GovernanceData = {
  proposal: Proposal
  yes: Vote[]
  no: Vote[]
  yesParty: YesPartyEntry[]
  noParty: NoPartyEntry[]
}