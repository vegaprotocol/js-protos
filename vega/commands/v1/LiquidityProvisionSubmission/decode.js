/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_LiquidityOrder = require('./../../../LiquidityOrder/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$marketId = ''
  let field$commitmentAmount = ''
  let field$fee = ''
  const field$sells = []
  const field$buys = []
  let field$reference = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$marketId = string(data)
        break

      case 2:
        field$commitmentAmount = string(data)
        break

      case 3:
        field$fee = string(data)
        break

      case 4:
        field$sells.push(_vega_LiquidityOrder.decode(data))
        break

      case 5:
        field$buys.push(_vega_LiquidityOrder.decode(data))
        break

      case 6:
        field$reference = string(data)
        break
    }
  }
  return {
    marketId: field$marketId,
    commitmentAmount: field$commitmentAmount,
    fee: field$fee,
    sells: field$sells,
    buys: field$buys,
    reference: field$reference
  }
}