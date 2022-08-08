import Writer from "protobuf-codec/encode/writer.mjs"
import { double } from "protobuf-codec/encode/types.mjs"
import * as LogNormalModelParams from "./../LogNormalModelParams/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.riskAversionParameter)
    writer.fixed64(1, obj.riskAversionParameter, double)
  if (obj.tau) writer.fixed64(2, obj.tau, double)
  if (obj.params) writer.bytes(3, LogNormalModelParams.encode(obj.params))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
