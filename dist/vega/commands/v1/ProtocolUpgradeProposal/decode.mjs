import reader from "protobuf-codec/decode/reader.mjs"
import { uint64, string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let upgradeBlockHeight = 0n
  let vegaReleaseTag = {}
  let dataNodeReleaseTag = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        upgradeBlockHeight = data
        break
      case 2:
        vegaReleaseTag = data
        break
      case 3:
        dataNodeReleaseTag = data
        break
    }
  }

  return {
    upgradeBlockHeight,
    vegaReleaseTag,
    dataNodeReleaseTag,
  }
}
