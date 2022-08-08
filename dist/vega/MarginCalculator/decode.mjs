import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as ScalingFactors from "./../ScalingFactors/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let scalingFactors = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        scalingFactors = data
        break
    }
  }

  return {
    scalingFactors,
  }
}
