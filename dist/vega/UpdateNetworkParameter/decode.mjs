import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as NetworkParameter from "./../NetworkParameter/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let changes = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        changes = data
        break
    }
  }

  return {
    changes,
  }
}
