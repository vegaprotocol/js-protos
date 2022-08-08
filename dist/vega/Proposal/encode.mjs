import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"
import * as State from "./State.mjs"
import * as ProposalTerms from "./../ProposalTerms/encode.mjs"
import * as ProposalError from "./../ProposalError.mjs"
import * as ProposalRationale from "./../ProposalRationale/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.reference) writer.bytes(2, obj.reference, string)
  if (obj.partyId) writer.bytes(3, obj.partyId, string)
  if (obj.state) writer.varint(4, obj.state, State)
  if (obj.timestamp) writer.varint(5, obj.timestamp, int64)
  if (obj.terms) writer.bytes(6, ProposalTerms.encode(obj.terms))
  if (obj.reason) writer.varint(7, obj.reason, ProposalError)
  if (obj.errorDetails) writer.bytes(8, obj.errorDetails, string)
  if (obj.rationale) writer.bytes(9, ProposalRationale.encode(obj.rationale))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
