import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let ethereumAddress = {}
  let vegaPublicKey = {}
  let amount = {}
  let blockTime = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        ethereumAddress = data
        break
      case 2:
        vegaPublicKey = data
        break
      case 3:
        amount = data
        break
      case 4:
        blockTime = data
        break
    }
  }

  return {
    ethereumAddress,
    vegaPublicKey,
    amount,
    blockTime,
  }
}
