import reader from "protobuf-codec/decode/reader.mjs"
import { int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let proposed = 0n
  let pending = 0n
  let open = 0n
  let close = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        proposed = data
        break
      case 2:
        pending = data
        break
      case 3:
        open = data
        break
      case 4:
        close = data
        break
    }
  }

  return {
    proposed,
    pending,
    open,
    close,
  }
}
