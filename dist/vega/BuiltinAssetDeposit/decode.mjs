import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let vegaAssetId = {}
  let partyId = {}
  let amount = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        vegaAssetId = data
        break
      case 2:
        partyId = data
        break
      case 3:
        amount = data
        break
    }
  }

  return {
    vegaAssetId,
    partyId,
    amount,
  }
}
