import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as ValidatorNodeStatus from "./../ValidatorNodeStatus.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.rawValidatorScore) writer.bytes(1, obj.rawValidatorScore, string)
  if (obj.performanceScore) writer.bytes(2, obj.performanceScore, string)
  if (obj.multisigScore) writer.bytes(3, obj.multisigScore, string)
  if (obj.validatorScore) writer.bytes(4, obj.validatorScore, string)
  if (obj.normalisedScore) writer.bytes(5, obj.normalisedScore, string)
  if (obj.validatorStatus)
    writer.varint(6, obj.validatorStatus, ValidatorNodeStatus)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
