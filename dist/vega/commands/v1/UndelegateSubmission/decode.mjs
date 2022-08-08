import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Method from "./Method.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let nodeId = {}
  let amount = {}
  let method = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        nodeId = data
        break
      case 2:
        amount = data
        break
      case 3:
        method = data
        break
    }
  }

  return {
    nodeId,
    amount,
    method,
  }
}
