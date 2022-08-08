import reader from "protobuf-codec/decode/reader.mjs"
import { uint64, string } from "protobuf-codec/decode/types.mjs"
import * as DispatchStrategy from "./../../../DispatchStrategy/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let startEpoch = 0n
  let endEpoch = null
  let factor = {}
  let dispatchStrategy = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        startEpoch = data
        break
      case 2:
        endEpoch = data
        break
      case 3:
        factor = data
        break
      case 4:
        dispatchStrategy = data
        break
    }
  }

  return {
    startEpoch,
    endEpoch,
    factor,
    dispatchStrategy,
  }
}
