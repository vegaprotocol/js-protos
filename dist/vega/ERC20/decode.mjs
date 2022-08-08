import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let contractAddress = {}
  let lifetimeLimit = {}
  let withdrawThreshold = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        contractAddress = data
        break
      case 2:
        lifetimeLimit = data
        break
      case 3:
        withdrawThreshold = data
        break
    }
  }

  return {
    contractAddress,
    lifetimeLimit,
    withdrawThreshold,
  }
}
