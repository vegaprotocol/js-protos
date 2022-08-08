import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64 } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.tid) writer.bytes(1, obj.tid, string)
  if (obj.nonce) writer.varint(2, obj.nonce, uint64)
  if (obj.hashFunction) writer.bytes(3, obj.hashFunction, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
