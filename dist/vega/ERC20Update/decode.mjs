import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let lifetimeLimit = {}
  let withdrawThreshold = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        lifetimeLimit = data
        break
      case 2:
        withdrawThreshold = data
        break
    }
  }

  return {
    lifetimeLimit,
    withdrawThreshold,
  }
}
