import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let tid = {}
  let nonce = 0n
  let hashFunction = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        tid = data
        break
      case 2:
        nonce = data
        break
      case 3:
        hashFunction = data
        break
    }
  }

  return {
    tid,
    nonce,
    hashFunction,
  }
}
