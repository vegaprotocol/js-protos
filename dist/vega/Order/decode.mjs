import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64, int64 } from "protobuf-codec/decode/types.mjs"
import * as Side from "./../Side.mjs"
import * as TimeInForce from "./TimeInForce.mjs"
import * as Type from "./Type.mjs"
import * as Status from "./Status.mjs"
import * as OrderError from "./../OrderError.mjs"
import * as PeggedOrder from "./../PeggedOrder/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let marketId = {}
  let partyId = {}
  let side = 0
  let price = {}
  let size = 0n
  let remaining = 0n
  let timeInForce = 0
  let type = 0
  let createdAt = 0n
  let status = 0
  let expiresAt = 0n
  let reference = {}
  let reason = 0
  let updatedAt = 0n
  let version = 0n
  let batchId = 0n
  let peggedOrder = {}
  let liquidityProvisionId = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        marketId = data
        break
      case 3:
        partyId = data
        break
      case 4:
        side = data
        break
      case 5:
        price = data
        break
      case 6:
        size = data
        break
      case 7:
        remaining = data
        break
      case 8:
        timeInForce = data
        break
      case 9:
        type = data
        break
      case 10:
        createdAt = data
        break
      case 11:
        status = data
        break
      case 12:
        expiresAt = data
        break
      case 13:
        reference = data
        break
      case 14:
        reason = data
        break
      case 15:
        updatedAt = data
        break
      case 16:
        version = data
        break
      case 17:
        batchId = data
        break
      case 18:
        peggedOrder = data
        break
      case 19:
        liquidityProvisionId = data
        break
    }
  }

  return {
    id,
    marketId,
    partyId,
    side,
    price,
    size,
    remaining,
    timeInForce,
    type,
    createdAt,
    status,
    expiresAt,
    reference,
    reason,
    updatedAt,
    version,
    batchId,
    peggedOrder,
    liquidityProvisionId,
  }
}
