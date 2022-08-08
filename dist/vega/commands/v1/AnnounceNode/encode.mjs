import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint32, uint64 } from "protobuf-codec/encode/types.mjs"
import * as Signature from "./../Signature/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.vegaPubKey) writer.bytes(1, obj.vegaPubKey, string)
  if (obj.ethereumAddress) writer.bytes(2, obj.ethereumAddress, string)
  if (obj.chainPubKey) writer.bytes(3, obj.chainPubKey, string)
  if (obj.infoUrl) writer.bytes(4, obj.infoUrl, string)
  if (obj.country) writer.bytes(5, obj.country, string)
  if (obj.id) writer.bytes(6, obj.id, string)
  if (obj.name) writer.bytes(7, obj.name, string)
  if (obj.avatarUrl) writer.bytes(8, obj.avatarUrl, string)
  if (obj.vegaPubKeyIndex) writer.varint(9, obj.vegaPubKeyIndex, uint32)
  if (obj.fromEpoch) writer.varint(10, obj.fromEpoch, uint64)
  if (obj.ethereumSignature)
    writer.bytes(11, Signature.encode(obj.ethereumSignature))
  if (obj.vegaSignature) writer.bytes(12, Signature.encode(obj.vegaSignature))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
