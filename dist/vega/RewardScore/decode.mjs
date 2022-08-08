import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as ValidatorNodeStatus from "./../ValidatorNodeStatus.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let rawValidatorScore = {}
  let performanceScore = {}
  let multisigScore = {}
  let validatorScore = {}
  let normalisedScore = {}
  let validatorStatus = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        rawValidatorScore = data
        break
      case 2:
        performanceScore = data
        break
      case 3:
        multisigScore = data
        break
      case 4:
        validatorScore = data
        break
      case 5:
        normalisedScore = data
        break
      case 6:
        validatorStatus = data
        break
    }
  }

  return {
    rawValidatorScore,
    performanceScore,
    multisigScore,
    validatorScore,
    normalisedScore,
    validatorStatus,
  }
}
