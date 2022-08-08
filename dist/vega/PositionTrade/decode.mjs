import reader from "protobuf-codec/decode/reader.mjs"
import { int64, string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let volume = 0n
  let price = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        volume = data
        break
      case 2:
        price = data
        break
    }
  }

  return {
    volume,
    price,
  }
}
