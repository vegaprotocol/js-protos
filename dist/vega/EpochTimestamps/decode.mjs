import reader from "protobuf-codec/decode/reader.mjs"
import { int64, uint64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let startTime = 0n
  let expiryTime = 0n
  let endTime = 0n
  let firstBlock = 0n
  let lastBlock = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        startTime = data
        break
      case 2:
        expiryTime = data
        break
      case 3:
        endTime = data
        break
      case 4:
        firstBlock = data
        break
      case 5:
        lastBlock = data
        break
    }
  }

  return {
    startTime,
    expiryTime,
    endTime,
    firstBlock,
    lastBlock,
  }
}
