import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as Proposal from "./../Proposal/encode.mjs"
import * as Vote from "./../Vote/encode.mjs"
import * as YesPartyEntry from "./YesPartyEntry/encode.mjs"
import * as NoPartyEntry from "./NoPartyEntry/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.proposal) writer.bytes(1, Proposal.encode(obj.proposal))
  if (obj.yes?.length) obj.yes.forEach((v) => writer.bytes(2, Vote.encode(v)))
  if (obj.no?.length) obj.no.forEach((v) => writer.bytes(3, Vote.encode(v)))
  if (obj.yesParty?.length)
    obj.yesParty.forEach((v) => writer.bytes(4, YesPartyEntry.encode(v)))
  if (obj.noParty?.length)
    obj.noParty.forEach((v) => writer.bytes(5, NoPartyEntry.encode(v)))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
