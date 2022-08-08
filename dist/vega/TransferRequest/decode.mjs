import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Account from "./../Account/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const fromAccount = []
  const toAccount = []
  let amount = {}
  let minAmount = {}
  let asset = {}
  let reference = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        fromAccount.push(data)
        break
      case 2:
        toAccount.push(data)
        break
      case 3:
        amount = data
        break
      case 4:
        minAmount = data
        break
      case 5:
        asset = data
        break
      case 6:
        reference = data
        break
    }
  }

  return {
    fromAccount,
    toAccount,
    amount,
    minAmount,
    asset,
    reference,
  }
}
