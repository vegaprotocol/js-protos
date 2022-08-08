import reader from "protobuf-codec/decode/reader.mjs"
import { int32 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let total = 0
  let offline = 0
  let online = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        total = data
        break
      case 2:
        offline = data
        break
      case 3:
        online = data
        break
    }
  }

  return {
    total,
    offline,
    online,
  }
}
