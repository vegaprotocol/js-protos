import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Type from "./Type.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let name = {}
  let type = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        name = data
        break
      case 2:
        type = data
        break
    }
  }

  return {
    name,
    type,
  }
}
