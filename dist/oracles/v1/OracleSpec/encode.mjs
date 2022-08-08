import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64 } from "protobuf-codec/encode/types.mjs"
import * as Filter from "./../Filter/encode.mjs"
import * as Status from "./Status.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.createdAt) writer.varint(2, obj.createdAt, int64)
  if (obj.updatedAt) writer.varint(3, obj.updatedAt, int64)
  if (obj.pubKeys?.length)
    obj.pubKeys.forEach((v) => writer.bytes(4, v, string))
  if (obj.filters?.length)
    obj.filters.forEach((v) => writer.bytes(5, Filter.encode(v)))
  if (obj.status) writer.varint(6, obj.status, Status)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
