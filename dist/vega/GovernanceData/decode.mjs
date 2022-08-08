import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as Proposal from "./../Proposal/decode.mjs"
import * as Vote from "./../Vote/decode.mjs"
import * as YesPartyEntry from "./YesPartyEntry/decode.mjs"
import * as NoPartyEntry from "./NoPartyEntry/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let proposal = {}
  const yes = []
  const no = []
  const yesParty = []
  const noParty = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        proposal = data
        break
      case 2:
        yes.push(data)
        break
      case 3:
        no.push(data)
        break
      case 4:
        yesParty.push(data)
        break
      case 5:
        noParty.push(data)
        break
    }
  }

  return {
    proposal,
    yes,
    no,
    yesParty,
    noParty,
  }
}
