import reader from "protobuf-codec/decode/reader.mjs"
import { double } from "protobuf-codec/decode/types.mjs"
import * as LogNormalModelParams from "./../LogNormalModelParams/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let riskAversionParameter = 0
  let tau = 0
  let params = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        riskAversionParameter = data
        break
      case 2:
        tau = data
        break
      case 3:
        params = data
        break
    }
  }

  return {
    riskAversionParameter,
    tau,
    params,
  }
}
