import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let makerFee = {}
  let infrastructureFee = {}
  let liquidityFee = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        makerFee = data
        break
      case 2:
        infrastructureFee = data
        break
      case 3:
        liquidityFee = data
        break
    }
  }

  return {
    makerFee,
    infrastructureFee,
    liquidityFee,
  }
}
