import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64, uint64 } from "protobuf-codec/decode/types.mjs"
import * as LiquidityOrderReference from "./../LiquidityOrderReference/decode.mjs"
import * as Status from "./Status.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let partyId = {}
  let createdAt = 0n
  let updatedAt = 0n
  let marketId = {}
  let commitmentAmount = {}
  let fee = {}
  const sells = []
  const buys = []
  let version = 0n
  let status = 0
  let reference = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        partyId = data
        break
      case 3:
        createdAt = data
        break
      case 4:
        updatedAt = data
        break
      case 5:
        marketId = data
        break
      case 6:
        commitmentAmount = data
        break
      case 7:
        fee = data
        break
      case 8:
        sells.push(data)
        break
      case 9:
        buys.push(data)
        break
      case 10:
        version = data
        break
      case 11:
        status = data
        break
      case 12:
        reference = data
        break
    }
  }

  return {
    id,
    partyId,
    createdAt,
    updatedAt,
    marketId,
    commitmentAmount,
    fee,
    sells,
    buys,
    version,
    status,
    reference,
  }
}
