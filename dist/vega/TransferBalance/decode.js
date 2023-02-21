import reader from "protobuf-codec/decode/reader.js"
import { string } from "protobuf-codec/decode/types.js"
import * as Account from "./../Account/decode.js"

export function _decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let account = {}
  let balance = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        account = Account.decode(data)
        break
      case 2:
        balance = string(data)
        break
    }
  }

  return {
    account,
    balance,
  }
}

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let account = {}
  let balance = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        account = Account.decode(data)
        break
      case 2:
        balance = string(data)
        break
    }
  }
  return { account, balance }
}
