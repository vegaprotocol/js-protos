import reader from "protobuf-codec/decode/reader.mjs"
import { double, int64 } from "protobuf-codec/decode/types.mjs"
import * as TargetStakeParameters from "./../TargetStakeParameters/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let targetStakeParameters = {}
  let triggeringRatio = 0
  let auctionExtension = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        targetStakeParameters = data
        break
      case 2:
        triggeringRatio = data
        break
      case 3:
        auctionExtension = data
        break
    }
  }

  return {
    targetStakeParameters,
    triggeringRatio,
    auctionExtension,
  }
}
