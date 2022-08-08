import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as FinancialAmount from "./../FinancialAmount/decode.mjs"
import * as TransferType from "./../TransferType.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let owner = {}
  let amount = {}
  let type = 0
  let minAmount = {}
  let marketId = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        owner = data
        break
      case 2:
        amount = data
        break
      case 3:
        type = data
        break
      case 4:
        minAmount = data
        break
      case 5:
        marketId = data
        break
    }
  }

  return {
    owner,
    amount,
    type,
    minAmount,
    marketId,
  }
}
