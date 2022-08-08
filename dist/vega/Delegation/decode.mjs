import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let party = {}
  let nodeId = {}
  let amount = {}
  let epochSeq = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        party = data
        break
      case 2:
        nodeId = data
        break
      case 3:
        amount = data
        break
      case 4:
        epochSeq = data
        break
    }
  }

  return {
    party,
    nodeId,
    amount,
    epochSeq,
  }
}
