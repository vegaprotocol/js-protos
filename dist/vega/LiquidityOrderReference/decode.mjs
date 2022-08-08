import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as LiquidityOrder from "./../LiquidityOrder/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let orderId = {}
  let liquidityOrder = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        orderId = data
        break
      case 2:
        liquidityOrder = data
        break
    }
  }

  return {
    orderId,
    liquidityOrder,
  }
}
