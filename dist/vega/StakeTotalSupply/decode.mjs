import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let tokenAddress = {}
  let totalSupply = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        tokenAddress = data
        break
      case 2:
        totalSupply = data
        break
    }
  }

  return {
    tokenAddress,
    totalSupply,
  }
}
