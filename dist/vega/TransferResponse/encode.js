import Writer from "protobuf-codec/encode/writer.js"
import {} from "protobuf-codec/encode/types.js"
import * as LedgerEntry from "./../LedgerEntry/encode.js"
import * as TransferBalance from "./../TransferBalance/encode.js"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.transfers?.length)
    obj.transfers.forEach((v) => writer.bytes(1, LedgerEntry.encode(v)))
  if (obj.balances?.length)
    obj.balances.forEach((v) => writer.bytes(2, TransferBalance.encode(v)))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
