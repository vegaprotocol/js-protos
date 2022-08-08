import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as SimpleModelParams from "./../SimpleModelParams/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let params = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        params = data
        break
    }
  }

  return {
    params,
  }
}
