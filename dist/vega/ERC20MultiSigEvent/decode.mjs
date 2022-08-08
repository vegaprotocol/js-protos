import reader from "protobuf-codec/decode/reader.mjs"
import { uint64 } from "protobuf-codec/decode/types.mjs"
import * as ERC20SignerAdded from "./../ERC20SignerAdded/decode.mjs"
import * as ERC20SignerRemoved from "./../ERC20SignerRemoved/decode.mjs"
import * as ERC20ThresholdSet from "./../ERC20ThresholdSet/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let index = 0n
  let block = 0n
  let signerAdded = {}
  let signerRemoved = {}
  let thresholdSet = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        index = data
        break
      case 2:
        block = data
        break
      case 1001:
        signerAdded = data
        break
      case 1002:
        signerRemoved = data
        break
      case 1003:
        thresholdSet = data
        break
    }
  }

  return {
    index,
    block,
    signerAdded,
    signerRemoved,
    thresholdSet,
  }
}
