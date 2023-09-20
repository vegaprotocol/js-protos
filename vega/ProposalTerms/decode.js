/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { int64 } = require('protobuf-codec/decode/types')
const _vega_UpdateMarket = require('./../UpdateMarket/decode.js')
const _vega_NewMarket = require('./../NewMarket/decode.js')
const _vega_UpdateNetworkParameter = require('./../UpdateNetworkParameter/decode.js')
const _vega_NewAsset = require('./../NewAsset/decode.js')
const _vega_NewFreeform = require('./../NewFreeform/decode.js')
const _vega_UpdateAsset = require('./../UpdateAsset/decode.js')
const _vega_NewSpotMarket = require('./../NewSpotMarket/decode.js')
const _vega_UpdateSpotMarket = require('./../UpdateSpotMarket/decode.js')
const _vega_NewTransfer = require('./../NewTransfer/decode.js')
const _vega_CancelTransfer = require('./../CancelTransfer/decode.js')
const _vega_UpdateMarketState = require('./../UpdateMarketState/decode.js')
const _vega_UpdateReferralProgram = require('./../UpdateReferralProgram/decode.js')
const _vega_UpdateVolumeDiscountProgram = require('./../UpdateVolumeDiscountProgram/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$closingTimestamp = 0n
  let field$enactmentTimestamp = 0n
  let field$validationTimestamp = 0n
  let field$change = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$closingTimestamp = int64(data)
        break

      case 2:
        field$enactmentTimestamp = int64(data)
        break

      case 3:
        field$validationTimestamp = int64(data)
        break

      case 101:
        field$change = { updateMarket: _vega_UpdateMarket.decode(data) }
        break

      case 102:
        field$change = { newMarket: _vega_NewMarket.decode(data) }
        break

      case 103:
        field$change = {
          updateNetworkParameter: _vega_UpdateNetworkParameter.decode(data)
        }
        break

      case 104:
        field$change = { newAsset: _vega_NewAsset.decode(data) }
        break

      case 105:
        field$change = { newFreeform: _vega_NewFreeform.decode(data) }
        break

      case 106:
        field$change = { updateAsset: _vega_UpdateAsset.decode(data) }
        break

      case 107:
        field$change = { newSpotMarket: _vega_NewSpotMarket.decode(data) }
        break

      case 108:
        field$change = { updateSpotMarket: _vega_UpdateSpotMarket.decode(data) }
        break

      case 109:
        field$change = { newTransfer: _vega_NewTransfer.decode(data) }
        break

      case 110:
        field$change = { cancelTransfer: _vega_CancelTransfer.decode(data) }
        break

      case 111:
        field$change = {
          updateMarketState: _vega_UpdateMarketState.decode(data)
        }
        break

      case 112:
        field$change = {
          updateReferralProgram: _vega_UpdateReferralProgram.decode(data)
        }
        break

      case 113:
        field$change = {
          updateVolumeDiscountProgram:
            _vega_UpdateVolumeDiscountProgram.decode(data)
        }
        break
    }
  }
  return {
    closingTimestamp: field$closingTimestamp,
    enactmentTimestamp: field$enactmentTimestamp,
    validationTimestamp: field$validationTimestamp,
    change: field$change
  }
}
