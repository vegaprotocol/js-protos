import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as StateVarValue from "./../StateVarValue/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let key = {}
  let tolerance = {}
  let value = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        key = data
        break
      case 2:
        tolerance = data
        break
      case 3:
        value = data
        break
    }
  }

  return {
    key,
    tolerance,
    value,
  }
}
