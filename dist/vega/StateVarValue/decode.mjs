import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as ScalarValue from "./../ScalarValue/decode.mjs"
import * as VectorValue from "./../VectorValue/decode.mjs"
import * as MatrixValue from "./../MatrixValue/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let scalarVal = {}
  let vectorVal = {}
  let matrixVal = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        scalarVal = data
        break
      case 2:
        vectorVal = data
        break
      case 3:
        matrixVal = data
        break
    }
  }

  return {
    scalarVal,
    vectorVal,
    matrixVal,
  }
}
