import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as Order from "./../Order/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let order = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        order = data
        break
    }
  }

  return {
    order,
  }
}
