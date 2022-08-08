import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as DispatchMetric from "./../DispatchMetric.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let assetForMetric = {}
  let metric = 0
  const markets = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        assetForMetric = data
        break
      case 2:
        metric = data
        break
      case 3:
        markets.push(data)
        break
    }
  }

  return {
    assetForMetric,
    metric,
    markets,
  }
}
