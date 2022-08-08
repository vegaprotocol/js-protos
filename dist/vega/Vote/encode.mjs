import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"
import * as Value from "./Value.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.partyId) writer.bytes(1, obj.partyId, string)
  if (obj.value) writer.varint(2, obj.value, Value)
  if (obj.proposalId) writer.bytes(3, obj.proposalId, string)
  if (obj.timestamp) writer.varint(4, obj.timestamp, int64)
  if (obj.totalGovernanceTokenBalance)
    writer.bytes(5, obj.totalGovernanceTokenBalance, string)
  if (obj.totalGovernanceTokenWeight)
    writer.bytes(6, obj.totalGovernanceTokenWeight, string)
  if (obj.totalEquityLikeShareWeight)
    writer.bytes(7, obj.totalEquityLikeShareWeight, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
