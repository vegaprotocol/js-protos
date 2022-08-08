import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as Erc20WithdrawExt from "./../Erc20WithdrawExt/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.ext) {
    const _o = obj.ext
    if (_o.erc20) writer.bytes(1, Erc20WithdrawExt.encode(_o.erc20))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
