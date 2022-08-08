import reader from "protobuf-codec/decode/reader.mjs"
import { int64 } from "protobuf-codec/decode/types.mjs"
import * as UpdateMarket from "./../UpdateMarket/decode.mjs"
import * as NewMarket from "./../NewMarket/decode.mjs"
import * as UpdateNetworkParameter from "./../UpdateNetworkParameter/decode.mjs"
import * as NewAsset from "./../NewAsset/decode.mjs"
import * as NewFreeform from "./../NewFreeform/decode.mjs"
import * as UpdateAsset from "./../UpdateAsset/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let closingTimestamp = 0n
  let enactmentTimestamp = 0n
  let validationTimestamp = 0n
  let updateMarket = {}
  let newMarket = {}
  let updateNetworkParameter = {}
  let newAsset = {}
  let newFreeform = {}
  let updateAsset = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        closingTimestamp = data
        break
      case 2:
        enactmentTimestamp = data
        break
      case 3:
        validationTimestamp = data
        break
      case 101:
        updateMarket = data
        break
      case 102:
        newMarket = data
        break
      case 103:
        updateNetworkParameter = data
        break
      case 104:
        newAsset = data
        break
      case 105:
        newFreeform = data
        break
      case 106:
        updateAsset = data
        break
    }
  }

  return {
    closingTimestamp,
    enactmentTimestamp,
    validationTimestamp,
    updateMarket,
    newMarket,
    updateNetworkParameter,
    newAsset,
    newFreeform,
    updateAsset,
  }
}
