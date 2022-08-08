import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Operator from "./Operator.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let operator = 0
  let value = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        operator = data
        break
      case 2:
        value = data
        break
    }
  }

  return {
    operator,
    value,
  }
}
