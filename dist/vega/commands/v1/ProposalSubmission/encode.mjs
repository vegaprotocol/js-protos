import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as ProposalTerms from "./../../../ProposalTerms/encode.mjs"
import * as ProposalRationale from "./../../../ProposalRationale/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.reference) writer.bytes(1, obj.reference, string)
  if (obj.terms) writer.bytes(2, ProposalTerms.encode(obj.terms))
  if (obj.rationale) writer.bytes(3, ProposalRationale.encode(obj.rationale))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
