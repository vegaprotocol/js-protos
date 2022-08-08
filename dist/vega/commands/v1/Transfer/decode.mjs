import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as AccountType from "./../../../AccountType.mjs"
import * as OneOffTransfer from "./../OneOffTransfer/decode.mjs"
import * as RecurringTransfer from "./../RecurringTransfer/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let fromAccountType = 0
  let to = {}
  let toAccountType = 0
  let asset = {}
  let amount = {}
  let reference = {}
  let oneOff = {}
  let recurring = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        fromAccountType = data
        break
      case 2:
        to = data
        break
      case 3:
        toAccountType = data
        break
      case 4:
        asset = data
        break
      case 5:
        amount = data
        break
      case 6:
        reference = data
        break
      case 101:
        oneOff = data
        break
      case 102:
        recurring = data
        break
    }
  }

  return {
    fromAccountType,
    to,
    toAccountType,
    asset,
    amount,
    reference,
    oneOff,
    recurring,
  }
}
