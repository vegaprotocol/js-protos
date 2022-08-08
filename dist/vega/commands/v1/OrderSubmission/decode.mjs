import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64, int64 } from "protobuf-codec/decode/types.mjs"
import * as Side from "./../../../Side.mjs"
import * as TimeInForce from "./../../../Order/TimeInForce.mjs"
import * as Type from "./../../../Order/Type.mjs"
import * as PeggedOrder from "./../../../PeggedOrder/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let marketId = {}
  let price = {}
  let size = 0n
  let side = 0
  let timeInForce = 0
  let expiresAt = 0n
  let type = 0
  let reference = {}
  let peggedOrder = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        marketId = data
        break
      case 2:
        price = data
        break
      case 3:
        size = data
        break
      case 4:
        side = data
        break
      case 5:
        timeInForce = data
        break
      case 6:
        expiresAt = data
        break
      case 7:
        type = data
        break
      case 8:
        reference = data
        break
      case 9:
        peggedOrder = data
        break
    }
  }

  return {
    marketId,
    price,
    size,
    side,
    timeInForce,
    expiresAt,
    type,
    reference,
    peggedOrder,
  }
}
