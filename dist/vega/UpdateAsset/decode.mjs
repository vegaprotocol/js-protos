import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as AssetDetailsUpdate from "./../AssetDetailsUpdate/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let assetId = {}
  let changes = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        assetId = data
        break
      case 2:
        changes = data
        break
    }
  }

  return {
    assetId,
    changes,
  }
}
