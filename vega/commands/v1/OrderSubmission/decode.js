/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64, int64, bool } = require('protobuf-codec/decode/types')
const _vega_Side = require('./../../../Side.js')
const _vega_Order_TimeInForce = require('./../../../Order/TimeInForce.js')
const _vega_Order_Type = require('./../../../Order/Type.js')
const _vega_PeggedOrder = require('./../../../PeggedOrder/decode.js')
const _vega_commands_v1_IcebergOpts = require('./../IcebergOpts/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$marketId = ''
  let field$price = ''
  let field$size = 0n
  let field$side = 0
  let field$timeInForce = 0
  let field$expiresAt = 0n
  let field$type = 0
  let field$reference = ''
  let field$peggedOrder = {}
  let field$postOnly = false
  let field$reduceOnly = false
  let field$icebergOpts = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$marketId = string(data)
        break

      case 2:
        field$price = string(data)
        break

      case 3:
        field$size = uint64(data)
        break

      case 4:
        field$side = _vega_Side.decode(data)
        break

      case 5:
        field$timeInForce = _vega_Order_TimeInForce.decode(data)
        break

      case 6:
        field$expiresAt = int64(data)
        break

      case 7:
        field$type = _vega_Order_Type.decode(data)
        break

      case 8:
        field$reference = string(data)
        break

      case 9:
        field$peggedOrder = _vega_PeggedOrder.decode(data)
        break

      case 10:
        field$postOnly = bool(data)
        break

      case 11:
        field$reduceOnly = bool(data)
        break

      case 12:
        field$icebergOpts = _vega_commands_v1_IcebergOpts.decode(data)
        break
    }
  }
  return {
    marketId: field$marketId,
    price: field$price,
    size: field$size,
    side: field$side,
    timeInForce: field$timeInForce,
    expiresAt: field$expiresAt,
    type: field$type,
    reference: field$reference,
    peggedOrder: field$peggedOrder,
    postOnly: field$postOnly,
    reduceOnly: field$reduceOnly,
    icebergOpts: field$icebergOpts
  }
}