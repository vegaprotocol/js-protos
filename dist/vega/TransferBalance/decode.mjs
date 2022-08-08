import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Account from "./../Account/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let account = {}
  let balance = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        account = data
        break
      case 2:
        balance = data
        break
    }
  }

  return {
    account,
    balance,
  }
}
