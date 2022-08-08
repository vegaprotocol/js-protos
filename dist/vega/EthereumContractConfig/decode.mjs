import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let address = {}
  let deploymentBlockHeight = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        address = data
        break
      case 6:
        deploymentBlockHeight = data
        break
    }
  }

  return {
    address,
    deploymentBlockHeight,
  }
}
