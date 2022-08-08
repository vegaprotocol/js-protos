import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"
import * as TimeInForce from "./../../../Order/TimeInForce.mjs"
import * as PeggedReference from "./../../../PeggedReference.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let orderId = {}
  let marketId = {}
  let price = null
  let sizeDelta = 0n
  let expiresAt = null
  let timeInForce = 0
  let peggedOffset = {}
  let peggedReference = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        orderId = data
        break
      case 2:
        marketId = data
        break
      case 3:
        price = data
        break
      case 4:
        sizeDelta = data
        break
      case 5:
        expiresAt = data
        break
      case 6:
        timeInForce = data
        break
      case 7:
        peggedOffset = data
        break
      case 8:
        peggedReference = data
        break
    }
  }

  return {
    orderId,
    marketId,
    price,
    sizeDelta,
    expiresAt,
    timeInForce,
    peggedOffset,
    peggedReference,
  }
}
