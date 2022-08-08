import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"
import * as Status from "./Status.mjs"
import * as WithdrawExt from "./../WithdrawExt/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let partyId = {}
  let amount = {}
  let asset = {}
  let status = 0
  let ref = {}
  let expiry = 0n
  let txHash = {}
  let createdTimestamp = 0n
  let withdrawnTimestamp = 0n
  let ext = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        partyId = data
        break
      case 3:
        amount = data
        break
      case 4:
        asset = data
        break
      case 5:
        status = data
        break
      case 6:
        ref = data
        break
      case 7:
        expiry = data
        break
      case 8:
        txHash = data
        break
      case 9:
        createdTimestamp = data
        break
      case 10:
        withdrawnTimestamp = data
        break
      case 11:
        ext = data
        break
    }
  }

  return {
    id,
    partyId,
    amount,
    asset,
    status,
    ref,
    expiry,
    txHash,
    createdTimestamp,
    withdrawnTimestamp,
    ext,
  }
}
