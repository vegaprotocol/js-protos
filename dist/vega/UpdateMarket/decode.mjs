import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as UpdateMarketConfiguration from "./../UpdateMarketConfiguration/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let marketId = {}
  let changes = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        marketId = data
        break
      case 2:
        changes = data
        break
    }
  }

  return {
    marketId,
    changes,
  }
}
