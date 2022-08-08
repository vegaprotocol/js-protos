import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as InstrumentMetadata from "./../InstrumentMetadata/encode.mjs"
import * as Future from "./../Future/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.code) writer.bytes(2, obj.code, string)
  if (obj.name) writer.bytes(3, obj.name, string)
  if (obj.metadata) writer.bytes(4, InstrumentMetadata.encode(obj.metadata))

  if (obj.product) {
    const _o = obj.product
    if (_o.future) writer.bytes(100, Future.encode(_o.future))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
