import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as StateValueProposal from "./../../../StateValueProposal/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let proposal = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        proposal = data
        break
    }
  }

  return {
    proposal,
  }
}
