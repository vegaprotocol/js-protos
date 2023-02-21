import reader from "protobuf-codec/decode/reader.js"
import { string } from "protobuf-codec/decode/types.js"
import * as LiquidityOrder from "./../LiquidityOrder/decode.js"

export function _decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let commitmentAmount = {}
  let fee = {}
  const sells = []
  const buys = []
  let reference = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        commitmentAmount = string(data)
        break
      case 2:
        fee = string(data)
        break
      case 3:
        sells.push(LiquidityOrder.decode(data))
        break
      case 4:
        buys.push(LiquidityOrder.decode(data))
        break
      case 5:
        reference = string(data)
        break
    }
  }

  return {
    commitmentAmount,
    fee,
    sells,
    buys,
    reference,
  }
}

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let commitmentAmount = {}
  let fee = {}
  const sells = []
  const buys = []
  let reference = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        commitmentAmount = string(data)
        break
      case 2:
        fee = string(data)
        break
      case 3:
        sells.push(LiquidityOrder.decode(data))
        break
      case 4:
        buys.push(LiquidityOrder.decode(data))
        break
      case 5:
        reference = string(data)
        break
    }
  }
  return { commitmentAmount, fee, sells, buys, reference }
}
