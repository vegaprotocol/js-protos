import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as WithdrawExt from "./../../../WithdrawExt/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let amount = {}
  let asset = {}
  let ext = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        amount = data
        break
      case 2:
        asset = data
        break
      case 3:
        ext = data
        break
    }
  }

  return {
    amount,
    asset,
    ext,
  }
}
