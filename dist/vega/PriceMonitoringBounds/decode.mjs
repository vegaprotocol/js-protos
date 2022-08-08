import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as PriceMonitoringTrigger from "./../PriceMonitoringTrigger/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let minValidPrice = {}
  let maxValidPrice = {}
  let trigger = {}
  let referencePrice = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        minValidPrice = data
        break
      case 2:
        maxValidPrice = data
        break
      case 3:
        trigger = data
        break
      case 4:
        referencePrice = data
        break
    }
  }

  return {
    minValidPrice,
    maxValidPrice,
    trigger,
    referencePrice,
  }
}
