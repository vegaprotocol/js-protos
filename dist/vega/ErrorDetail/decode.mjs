import reader from "protobuf-codec/decode/reader.mjs"
import { int32, string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let code = 0
  let message = {}
  let inner = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        code = data
        break
      case 2:
        message = data
        break
      case 3:
        inner = data
        break
    }
  }

  return {
    code,
    message,
    inner,
  }
}
