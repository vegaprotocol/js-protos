import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let vegaAssetId = {}
  let sourceEthereumAddress = {}
  let lifetimeLimits = {}
  let withdrawThreshold = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        vegaAssetId = data
        break
      case 2:
        sourceEthereumAddress = data
        break
      case 3:
        lifetimeLimits = data
        break
      case 4:
        withdrawThreshold = data
        break
    }
  }

  return {
    vegaAssetId,
    sourceEthereumAddress,
    lifetimeLimits,
    withdrawThreshold,
  }
}
