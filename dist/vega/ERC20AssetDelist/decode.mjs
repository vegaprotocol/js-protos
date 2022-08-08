import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let vegaAssetId = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        vegaAssetId = data
        break
    }
  }

  return {
    vegaAssetId,
  }
}
