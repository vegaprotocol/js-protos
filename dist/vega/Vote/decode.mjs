import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"
import * as Value from "./Value.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let partyId = {}
  let value = 0
  let proposalId = {}
  let timestamp = 0n
  let totalGovernanceTokenBalance = {}
  let totalGovernanceTokenWeight = {}
  let totalEquityLikeShareWeight = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        partyId = data
        break
      case 2:
        value = data
        break
      case 3:
        proposalId = data
        break
      case 4:
        timestamp = data
        break
      case 5:
        totalGovernanceTokenBalance = data
        break
      case 6:
        totalGovernanceTokenWeight = data
        break
      case 7:
        totalEquityLikeShareWeight = data
        break
    }
  }

  return {
    partyId,
    value,
    proposalId,
    timestamp,
    totalGovernanceTokenBalance,
    totalGovernanceTokenWeight,
    totalEquityLikeShareWeight,
  }
}
