import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint32 } from "protobuf-codec/encode/types.mjs"
import * as ValidatorNodeStatus from "./../ValidatorNodeStatus.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.stakeScore) writer.bytes(1, obj.stakeScore, string)
  if (obj.performanceScore) writer.bytes(2, obj.performanceScore, string)
  if (obj.previousStatus)
    writer.varint(3, obj.previousStatus, ValidatorNodeStatus)
  if (obj.status) writer.varint(4, obj.status, ValidatorNodeStatus)
  if (obj.votingPower) writer.varint(5, obj.votingPower, uint32)
  if (obj.rankingScore) writer.bytes(6, obj.rankingScore, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
