import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let amount = {}
  let asset = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        amount = data
        break
      case 2:
        asset = data
        break
    }
  }

  return {
    amount,
    asset,
  }
}
