import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"
import * as State from "./State.mjs"
import * as ProposalTerms from "./../ProposalTerms/decode.mjs"
import * as ProposalError from "./../ProposalError.mjs"
import * as ProposalRationale from "./../ProposalRationale/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let reference = {}
  let partyId = {}
  let state = 0
  let timestamp = 0n
  let terms = {}
  let reason = 0
  let errorDetails = {}
  let rationale = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        reference = data
        break
      case 3:
        partyId = data
        break
      case 4:
        state = data
        break
      case 5:
        timestamp = data
        break
      case 6:
        terms = data
        break
      case 7:
        reason = data
        break
      case 8:
        errorDetails = data
        break
      case 9:
        rationale = data
        break
    }
  }

  return {
    id,
    reference,
    partyId,
    state,
    timestamp,
    terms,
    reason,
    errorDetails,
    rationale,
  }
}
