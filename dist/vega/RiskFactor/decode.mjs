import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let market = {}
  let short = {}
  let long = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        market = data
        break
      case 2:
        short = data
        break
      case 3:
        long = data
        break
    }
  }

  return {
    market,
    short,
    long,
  }
}
