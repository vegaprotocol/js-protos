import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fromAccount) writer.bytes(1, obj.fromAccount, string)
  if (obj.toAccount) writer.bytes(2, obj.toAccount, string)
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.reference) writer.bytes(4, obj.reference, string)
  if (obj.type) writer.bytes(5, obj.type, string)
  if (obj.timestamp) writer.varint(6, obj.timestamp, int64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
