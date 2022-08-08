import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as AccountType from "./../AccountType.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let owner = {}
  let balance = {}
  let asset = {}
  let marketId = {}
  let type = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        owner = data
        break
      case 3:
        balance = data
        break
      case 4:
        asset = data
        break
      case 5:
        marketId = data
        break
      case 6:
        type = data
        break
    }
  }

  return {
    id,
    owner,
    balance,
    asset,
    marketId,
    type,
  }
}
