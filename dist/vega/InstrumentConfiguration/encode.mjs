import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as FutureProduct from "./../FutureProduct/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.name) writer.bytes(1, obj.name, string)
  if (obj.code) writer.bytes(2, obj.code, string)

  if (obj.product) {
    const _o = obj.product
    if (_o.future) writer.bytes(100, FutureProduct.encode(_o.future))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
