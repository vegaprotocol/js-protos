import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as ProposalTerms from "./../../../ProposalTerms/decode.mjs"
import * as ProposalRationale from "./../../../ProposalRationale/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let reference = {}
  let terms = {}
  let rationale = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        reference = data
        break
      case 2:
        terms = data
        break
      case 3:
        rationale = data
        break
    }
  }

  return {
    reference,
    terms,
    rationale,
  }
}
