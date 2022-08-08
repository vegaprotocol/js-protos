import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as Signature from "./../Signature/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let nodeId = {}
  let ethereumSignature = {}
  let vegaSignature = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        nodeId = data
        break
      case 2:
        ethereumSignature = data
        break
      case 3:
        vegaSignature = data
        break
    }
  }

  return {
    nodeId,
    ethereumSignature,
    vegaSignature,
  }
}
