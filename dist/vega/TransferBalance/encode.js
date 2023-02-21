import Writer from "protobuf-codec/encode/writer.js"
import { string } from "protobuf-codec/encode/types.js"
import * as Account from "./../Account/encode.js"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.account) writer.bytes(1, Account.encode(obj.account))
  if (obj.balance) writer.bytes(2, obj.balance, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
