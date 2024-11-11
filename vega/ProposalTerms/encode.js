/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { int64 } = require('protobuf-codec/encode/types')
const _vega_UpdateMarket = require('./../UpdateMarket/encode.js')
const _vega_NewMarket = require('./../NewMarket/encode.js')
const _vega_UpdateNetworkParameter = require('./../UpdateNetworkParameter/encode.js')
const _vega_NewAsset = require('./../NewAsset/encode.js')
const _vega_NewFreeform = require('./../NewFreeform/encode.js')
const _vega_UpdateAsset = require('./../UpdateAsset/encode.js')
const _vega_NewSpotMarket = require('./../NewSpotMarket/encode.js')
const _vega_UpdateSpotMarket = require('./../UpdateSpotMarket/encode.js')
const _vega_NewTransfer = require('./../NewTransfer/encode.js')
const _vega_CancelTransfer = require('./../CancelTransfer/encode.js')
const _vega_UpdateMarketState = require('./../UpdateMarketState/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.closingTimestamp) writer.varint(1, obj.closingTimestamp, int64)
  if (obj.enactmentTimestamp) writer.varint(2, obj.enactmentTimestamp, int64)
  if (obj.validationTimestamp) writer.varint(3, obj.validationTimestamp, int64)

  if (obj.change?.updateMarket ?? obj.updateMarket)
    writer.bytes(
      101,
      _vega_UpdateMarket.encode(obj.change?.updateMarket ?? obj.updateMarket)
    )
  if (obj.change?.newMarket ?? obj.newMarket)
    writer.bytes(
      102,
      _vega_NewMarket.encode(obj.change?.newMarket ?? obj.newMarket)
    )
  if (obj.change?.updateNetworkParameter ?? obj.updateNetworkParameter)
    writer.bytes(
      103,
      _vega_UpdateNetworkParameter.encode(
        obj.change?.updateNetworkParameter ?? obj.updateNetworkParameter
      )
    )
  if (obj.change?.newAsset ?? obj.newAsset)
    writer.bytes(
      104,
      _vega_NewAsset.encode(obj.change?.newAsset ?? obj.newAsset)
    )
  if (obj.change?.newFreeform ?? obj.newFreeform)
    writer.bytes(
      105,
      _vega_NewFreeform.encode(obj.change?.newFreeform ?? obj.newFreeform)
    )
  if (obj.change?.updateAsset ?? obj.updateAsset)
    writer.bytes(
      106,
      _vega_UpdateAsset.encode(obj.change?.updateAsset ?? obj.updateAsset)
    )
  if (obj.change?.newSpotMarket ?? obj.newSpotMarket)
    writer.bytes(
      107,
      _vega_NewSpotMarket.encode(obj.change?.newSpotMarket ?? obj.newSpotMarket)
    )
  if (obj.change?.updateSpotMarket ?? obj.updateSpotMarket)
    writer.bytes(
      108,
      _vega_UpdateSpotMarket.encode(
        obj.change?.updateSpotMarket ?? obj.updateSpotMarket
      )
    )
  if (obj.change?.newTransfer ?? obj.newTransfer)
    writer.bytes(
      109,
      _vega_NewTransfer.encode(obj.change?.newTransfer ?? obj.newTransfer)
    )
  if (obj.change?.cancelTransfer ?? obj.cancelTransfer)
    writer.bytes(
      110,
      _vega_CancelTransfer.encode(
        obj.change?.cancelTransfer ?? obj.cancelTransfer
      )
    )
  if (obj.change?.updateMarketState ?? obj.updateMarketState)
    writer.bytes(
      111,
      _vega_UpdateMarketState.encode(
        obj.change?.updateMarketState ?? obj.updateMarketState
      )
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
