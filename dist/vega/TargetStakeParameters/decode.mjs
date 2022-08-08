import reader from "protobuf-codec/decode/reader.mjs"
import { int64, double } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let timeWindow = 0n
  let scalingFactor = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        timeWindow = data
        break
      case 2:
        scalingFactor = data
        break
    }
  }

  return {
    timeWindow,
    scalingFactor,
  }
}
