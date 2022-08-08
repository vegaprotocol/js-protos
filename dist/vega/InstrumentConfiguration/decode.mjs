import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as FutureProduct from "./../FutureProduct/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let name = {}
  let code = {}
  let future = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        name = data
        break
      case 2:
        code = data
        break
      case 100:
        future = data
        break
    }
  }

  return {
    name,
    code,
    future,
  }
}
