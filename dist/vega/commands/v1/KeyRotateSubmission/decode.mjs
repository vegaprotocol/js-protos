import reader from "protobuf-codec/decode/reader.mjs"
import { uint32, uint64, string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let newPubKeyIndex = 0
  let targetBlock = 0n
  let newPubKey = {}
  let currentPubKeyHash = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        newPubKeyIndex = data
        break
      case 2:
        targetBlock = data
        break
      case 3:
        newPubKey = data
        break
      case 4:
        currentPubKeyHash = data
        break
    }
  }

  return {
    newPubKeyIndex,
    targetBlock,
    newPubKey,
    currentPubKeyHash,
  }
}
