import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as UpdateFutureProduct from "./../UpdateFutureProduct/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.code) writer.bytes(1, obj.code, string)

  if (obj.product) {
    const _o = obj.product
    if (_o.future) writer.bytes(100, UpdateFutureProduct.encode(_o.future))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
