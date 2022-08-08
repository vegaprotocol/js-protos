import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as AssetDetailsUpdate from "./../AssetDetailsUpdate/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.assetId) writer.bytes(1, obj.assetId, string)
  if (obj.changes) writer.bytes(2, AssetDetailsUpdate.encode(obj.changes))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
