import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as FeeFactors from "./../FeeFactors/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let factors = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        factors = data
        break
    }
  }

  return {
    factors,
  }
}
