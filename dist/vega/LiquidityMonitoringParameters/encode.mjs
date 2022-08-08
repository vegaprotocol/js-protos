import Writer from "protobuf-codec/encode/writer.mjs"
import { double, int64 } from "protobuf-codec/encode/types.mjs"
import * as TargetStakeParameters from "./../TargetStakeParameters/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.targetStakeParameters)
    writer.bytes(1, TargetStakeParameters.encode(obj.targetStakeParameters))
  if (obj.triggeringRatio) writer.fixed64(2, obj.triggeringRatio, double)
  if (obj.auctionExtension) writer.varint(3, obj.auctionExtension, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
