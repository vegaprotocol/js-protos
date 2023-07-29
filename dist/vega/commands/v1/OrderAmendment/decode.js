/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, int64 } = require('protobuf-codec/decode/types')
const _vega_Order_TimeInForce = require('./../../../Order/TimeInForce.js')
const _vega_PeggedReference = require('./../../../PeggedReference.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$orderId = ''
  let field$marketId = ''
  let field$price = null
  let field$sizeDelta = 0n
  let field$expiresAt = null
  let field$timeInForce = 0
  let field$peggedOffset = ''
  let field$peggedReference = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$orderId = string(data)
        break

      case 2:
        field$marketId = string(data)
        break

      case 3:
        field$price = string(data)
        break

      case 4:
        field$sizeDelta = int64(data)
        break

      case 5:
        field$expiresAt = int64(data)
        break

      case 6:
        field$timeInForce = _vega_Order_TimeInForce.decode(data)
        break

      case 7:
        field$peggedOffset = string(data)
        break

      case 8:
        field$peggedReference = _vega_PeggedReference.decode(data)
        break
    }
  }
  return {
    orderId: field$orderId,
    marketId: field$marketId,
    price: field$price,
    sizeDelta: field$sizeDelta,
    expiresAt: field$expiresAt,
    timeInForce: field$timeInForce,
    peggedOffset: field$peggedOffset,
    peggedReference: field$peggedReference
  }
}
