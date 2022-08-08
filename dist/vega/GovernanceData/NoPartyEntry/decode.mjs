import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Vote from "./../../Vote/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let key = {}
  let value = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        key = data
        break
      case 2:
        value = data
        break
    }
  }

  return {
    key,
    value,
  }
}
