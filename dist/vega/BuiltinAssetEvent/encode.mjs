import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as BuiltinAssetDeposit from "./../BuiltinAssetDeposit/encode.mjs"
import * as BuiltinAssetWithdrawal from "./../BuiltinAssetWithdrawal/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.action) {
    const _o = obj.action
    if (_o.deposit) writer.bytes(1001, BuiltinAssetDeposit.encode(_o.deposit))
    if (_o.withdrawal)
      writer.bytes(1002, BuiltinAssetWithdrawal.encode(_o.withdrawal))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
