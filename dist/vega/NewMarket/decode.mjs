import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as NewMarketConfiguration from "./../NewMarketConfiguration/decode.mjs"
import * as NewMarketCommitment from "./../NewMarketCommitment/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let changes = {}
  let liquidityCommitment = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        changes = data
        break
      case 2:
        liquidityCommitment = data
        break
    }
  }

  return {
    changes,
    liquidityCommitment,
  }
}
