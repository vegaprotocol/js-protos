import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let description = {}
  let hash = {}
  let url = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        description = data
        break
      case 2:
        hash = data
        break
      case 3:
        url = data
        break
    }
  }

  return {
    description,
    hash,
    url,
  }
}
