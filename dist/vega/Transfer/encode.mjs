import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as FinancialAmount from "./../FinancialAmount/encode.mjs"
import * as TransferType from "./../TransferType.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.owner) writer.bytes(1, obj.owner, string)
  if (obj.amount) writer.bytes(2, FinancialAmount.encode(obj.amount))
  if (obj.type) writer.varint(3, obj.type, TransferType)
  if (obj.minAmount) writer.bytes(4, obj.minAmount, string)
  if (obj.marketId) writer.bytes(5, obj.marketId, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
