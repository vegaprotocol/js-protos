import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as UpdateFutureProduct from "./../UpdateFutureProduct/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let code = {}
  let future = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        code = data
        break
      case 100:
        future = data
        break
    }
  }

  return {
    code,
    future,
  }
}
