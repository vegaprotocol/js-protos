import reader from "protobuf-codec/decode/reader.mjs"
import { uint64, string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let targetBlock = 0n
  let newAddress = {}
  let currentAddress = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        targetBlock = data
        break
      case 2:
        newAddress = data
        break
      case 3:
        currentAddress = data
        break
    }
  }

  return {
    targetBlock,
    newAddress,
    currentAddress,
  }
}
