import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as WithdrawExt from "./../../../WithdrawExt/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.amount) writer.bytes(1, obj.amount, string)
  if (obj.asset) writer.bytes(2, obj.asset, string)
  if (obj.ext) writer.bytes(3, WithdrawExt.encode(obj.ext))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
