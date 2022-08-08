import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as DispatchMetric from "./../DispatchMetric.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.assetForMetric) writer.bytes(1, obj.assetForMetric, string)
  if (obj.metric) writer.varint(2, obj.metric, DispatchMetric)
  if (obj.markets?.length)
    obj.markets.forEach((v) => writer.bytes(3, v, string))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
