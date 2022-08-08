import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as Account from "./../Account/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fromAccount?.length)
    obj.fromAccount.forEach((v) => writer.bytes(1, Account.encode(v)))
  if (obj.toAccount?.length)
    obj.toAccount.forEach((v) => writer.bytes(2, Account.encode(v)))
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.minAmount) writer.bytes(4, obj.minAmount, string)
  if (obj.asset) writer.bytes(5, obj.asset, string)
  if (obj.reference) writer.bytes(6, obj.reference, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
