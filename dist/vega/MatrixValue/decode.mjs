import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as VectorValue from "./../VectorValue/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const value = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        value.push(data)
        break
    }
  }

  return {
    value,
  }
}
