import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint32 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let value = {}
  let algo = {}
  let version = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        value = data
        break
      case 2:
        algo = data
        break
      case 3:
        version = data
        break
    }
  }

  return {
    value,
    algo,
    version,
  }
}
