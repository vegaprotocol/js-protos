import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as Filter from "./../Filter/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.pubKeys?.length)
    obj.pubKeys.forEach((v) => writer.bytes(1, v, string))
  if (obj.filters?.length)
    obj.filters.forEach((v) => writer.bytes(2, Filter.encode(v)))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
