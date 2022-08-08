import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as ScalarValue from "./../ScalarValue/encode.mjs"
import * as VectorValue from "./../VectorValue/encode.mjs"
import * as MatrixValue from "./../MatrixValue/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.value) {
    const _o = obj.value
    if (_o.scalarVal) writer.bytes(1, ScalarValue.encode(_o.scalarVal))
    if (_o.vectorVal) writer.bytes(2, VectorValue.encode(_o.vectorVal))
    if (_o.matrixVal) writer.bytes(3, MatrixValue.encode(_o.matrixVal))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
