import reader from "protobuf-codec/decode/reader.mjs"
import { string, bytes } from "protobuf-codec/decode/types.mjs"
import * as NodeSignatureKind from "./../NodeSignatureKind.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let sig = new Uint8Array(0)
  let kind = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        sig = data
        break
      case 3:
        kind = data
        break
    }
  }

  return {
    id,
    sig,
    kind,
  }
}
