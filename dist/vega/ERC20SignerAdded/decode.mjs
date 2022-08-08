import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let newSigner = {}
  let nonce = {}
  let blockTime = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        newSigner = data
        break
      case 2:
        nonce = data
        break
      case 3:
        blockTime = data
        break
    }
  }

  return {
    newSigner,
    nonce,
    blockTime,
  }
}
