import reader from "protobuf-codec/decode/reader.mjs"
import { double } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let mu = 0
  let r = 0
  let sigma = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        mu = data
        break
      case 2:
        r = data
        break
      case 3:
        sigma = data
        break
    }
  }

  return {
    mu,
    r,
    sigma,
  }
}
