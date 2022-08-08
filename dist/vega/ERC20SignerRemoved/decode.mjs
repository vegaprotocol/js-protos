import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let oldSigner = {}
  let nonce = {}
  let blockTime = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        oldSigner = data
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
    oldSigner,
    nonce,
    blockTime,
  }
}
