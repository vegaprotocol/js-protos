import reader from "protobuf-codec/decode/reader.mjs"
import { int64, uint64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let duration = 0n
  let volume = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        duration = data
        break
      case 2:
        volume = data
        break
    }
  }

  return {
    duration,
    volume,
  }
}
