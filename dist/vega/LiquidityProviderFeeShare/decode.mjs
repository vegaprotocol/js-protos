import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let party = {}
  let equityLikeShare = {}
  let averageEntryValuation = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        party = data
        break
      case 2:
        equityLikeShare = data
        break
      case 3:
        averageEntryValuation = data
        break
    }
  }

  return {
    party,
    equityLikeShare,
    averageEntryValuation,
  }
}
