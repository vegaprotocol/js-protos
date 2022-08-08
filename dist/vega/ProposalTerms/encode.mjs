import Writer from "protobuf-codec/encode/writer.mjs"
import { int64 } from "protobuf-codec/encode/types.mjs"
import * as UpdateMarket from "./../UpdateMarket/encode.mjs"
import * as NewMarket from "./../NewMarket/encode.mjs"
import * as UpdateNetworkParameter from "./../UpdateNetworkParameter/encode.mjs"
import * as NewAsset from "./../NewAsset/encode.mjs"
import * as NewFreeform from "./../NewFreeform/encode.mjs"
import * as UpdateAsset from "./../UpdateAsset/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.closingTimestamp) writer.varint(1, obj.closingTimestamp, int64)
  if (obj.enactmentTimestamp) writer.varint(2, obj.enactmentTimestamp, int64)
  if (obj.validationTimestamp) writer.varint(3, obj.validationTimestamp, int64)

  if (obj.change) {
    const _o = obj.change
    if (_o.updateMarket) writer.bytes(101, UpdateMarket.encode(_o.updateMarket))
    if (_o.newMarket) writer.bytes(102, NewMarket.encode(_o.newMarket))
    if (_o.updateNetworkParameter)
      writer.bytes(
        103,
        UpdateNetworkParameter.encode(_o.updateNetworkParameter)
      )
    if (_o.newAsset) writer.bytes(104, NewAsset.encode(_o.newAsset))
    if (_o.newFreeform) writer.bytes(105, NewFreeform.encode(_o.newFreeform))
    if (_o.updateAsset) writer.bytes(106, UpdateAsset.encode(_o.updateAsset))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
