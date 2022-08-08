import reader from "protobuf-codec/decode/reader.mjs"
import { bytes } from "protobuf-codec/decode/types.mjs"
import * as OracleSource from "./OracleSource.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let source = 0
  let payload = new Uint8Array(0)

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        source = data
        break
      case 2:
        payload = data
        break
    }
  }

  return {
    source,
    payload,
  }
}
