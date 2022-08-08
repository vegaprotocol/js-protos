import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as LiquidityOrder from "./../../../LiquidityOrder/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let marketId = {}
  let commitmentAmount = {}
  let fee = {}
  const sells = []
  const buys = []
  let reference = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        marketId = data
        break
      case 2:
        commitmentAmount = data
        break
      case 3:
        fee = data
        break
      case 4:
        sells.push(data)
        break
      case 5:
        buys.push(data)
        break
      case 6:
        reference = data
        break
    }
  }

  return {
    marketId,
    commitmentAmount,
    fee,
    sells,
    buys,
    reference,
  }
}
