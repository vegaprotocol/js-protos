import reader from "protobuf-codec/decode/reader.mjs"
import { double } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let searchLevel = 0
  let initialMargin = 0
  let collateralRelease = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        searchLevel = data
        break
      case 2:
        initialMargin = data
        break
      case 3:
        collateralRelease = data
        break
    }
  }

  return {
    searchLevel,
    initialMargin,
    collateralRelease,
  }
}
