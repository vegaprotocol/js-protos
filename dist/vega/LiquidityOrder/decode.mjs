import reader from "protobuf-codec/decode/reader.mjs"
import { uint32, string } from "protobuf-codec/decode/types.mjs"
import * as PeggedReference from "./../PeggedReference.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let reference = 0
  let proportion = 0
  let offset = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        reference = data
        break
      case 2:
        proportion = data
        break
      case 3:
        offset = data
        break
    }
  }

  return {
    reference,
    proportion,
    offset,
  }
}
