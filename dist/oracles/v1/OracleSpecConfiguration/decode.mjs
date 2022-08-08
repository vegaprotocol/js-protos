import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Filter from "./../Filter/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const pubKeys = []
  const filters = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        pubKeys.push(data)
        break
      case 2:
        filters.push(data)
        break
    }
  }

  return {
    pubKeys,
    filters,
  }
}
