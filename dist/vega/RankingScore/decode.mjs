import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint32 } from "protobuf-codec/decode/types.mjs"
import * as ValidatorNodeStatus from "./../ValidatorNodeStatus.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let stakeScore = {}
  let performanceScore = {}
  let previousStatus = 0
  let status = 0
  let votingPower = 0
  let rankingScore = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        stakeScore = data
        break
      case 2:
        performanceScore = data
        break
      case 3:
        previousStatus = data
        break
      case 4:
        status = data
        break
      case 5:
        votingPower = data
        break
      case 6:
        rankingScore = data
        break
    }
  }

  return {
    stakeScore,
    performanceScore,
    previousStatus,
    status,
    votingPower,
    rankingScore,
  }
}
