import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"
import * as Status from "./Status.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let status = 0
  let partyId = {}
  let asset = {}
  let amount = {}
  let txHash = {}
  let creditedTimestamp = 0n
  let createdTimestamp = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        status = data
        break
      case 3:
        partyId = data
        break
      case 4:
        asset = data
        break
      case 5:
        amount = data
        break
      case 6:
        txHash = data
        break
      case 7:
        creditedTimestamp = data
        break
      case 8:
        createdTimestamp = data
        break
    }
  }

  return {
    id,
    status,
    partyId,
    asset,
    amount,
    txHash,
    creditedTimestamp,
    createdTimestamp,
  }
}
