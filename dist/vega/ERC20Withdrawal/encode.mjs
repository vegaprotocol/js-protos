import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.vegaAssetId) writer.bytes(1, obj.vegaAssetId, string)
  if (obj.targetEthereumAddress)
    writer.bytes(2, obj.targetEthereumAddress, string)
  if (obj.referenceNonce) writer.bytes(3, obj.referenceNonce, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
