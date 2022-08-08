import reader from "protobuf-codec/decode/reader.mjs"
import { uint64, double } from "protobuf-codec/decode/types.mjs"
import * as Epoch from "./../Epoch/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let epoch = {}
  let offline = 0n
  let online = 0n
  let totalRewards = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        epoch = data
        break
      case 2:
        offline = data
        break
      case 3:
        online = data
        break
      case 4:
        totalRewards = data
        break
    }
  }

  return {
    epoch,
    offline,
    online,
    totalRewards,
  }
}
