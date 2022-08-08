import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as BuiltinAssetDeposit from "./../BuiltinAssetDeposit/decode.mjs"
import * as BuiltinAssetWithdrawal from "./../BuiltinAssetWithdrawal/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let deposit = {}
  let withdrawal = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1001:
        deposit = data
        break
      case 1002:
        withdrawal = data
        break
    }
  }

  return {
    deposit,
    withdrawal,
  }
}
