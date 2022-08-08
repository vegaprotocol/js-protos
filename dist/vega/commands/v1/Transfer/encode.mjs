import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as AccountType from "./../../../AccountType.mjs"
import * as OneOffTransfer from "./../OneOffTransfer/encode.mjs"
import * as RecurringTransfer from "./../RecurringTransfer/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fromAccountType) writer.varint(1, obj.fromAccountType, AccountType)
  if (obj.to) writer.bytes(2, obj.to, string)
  if (obj.toAccountType) writer.varint(3, obj.toAccountType, AccountType)
  if (obj.asset) writer.bytes(4, obj.asset, string)
  if (obj.amount) writer.bytes(5, obj.amount, string)
  if (obj.reference) writer.bytes(6, obj.reference, string)

  if (obj.kind) {
    const _o = obj.kind
    if (_o.oneOff) writer.bytes(101, OneOffTransfer.encode(_o.oneOff))
    if (_o.recurring) writer.bytes(102, RecurringTransfer.encode(_o.recurring))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
