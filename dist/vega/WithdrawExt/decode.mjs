import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as Erc20WithdrawExt from "./../Erc20WithdrawExt/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let erc20 = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        erc20 = data
        break
    }
  }

  return {
    erc20,
  }
}
