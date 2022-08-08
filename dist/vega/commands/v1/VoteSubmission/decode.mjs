import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Value from "./../../../Vote/Value.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let proposalId = {}
  let value = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        proposalId = data
        break
      case 2:
        value = data
        break
    }
  }

  return {
    proposalId,
    value,
  }
}
