import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as AssetDetails from "./../AssetDetails/encode.mjs"
import * as Status from "./Status.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.details) writer.bytes(2, AssetDetails.encode(obj.details))
  if (obj.status) writer.varint(3, obj.status, Status)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
