import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as PeggedReference from "./../PeggedReference.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let reference = 0
  let offset = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        reference = data
        break
      case 2:
        offset = data
        break
    }
  }

  return {
    reference,
    offset,
  }
}
