import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let vegaAssetId = {}
  let sourceEthereumAddress = {}
  let targetPartyId = {}
  let amount = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        vegaAssetId = data
        break
      case 2:
        sourceEthereumAddress = data
        break
      case 3:
        targetPartyId = data
        break
      case 4:
        amount = data
        break
    }
  }

  return {
    vegaAssetId,
    sourceEthereumAddress,
    targetPartyId,
    amount,
  }
}
