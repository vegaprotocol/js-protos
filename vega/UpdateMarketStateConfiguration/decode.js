/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_MarketStateUpdateType = require('./../MarketStateUpdateType.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$marketId = ''
  let field$updateType = _vega_MarketStateUpdateType.decode(0)
  let field$price = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$marketId = string(data)
        break

      case 2:
        field$updateType = _vega_MarketStateUpdateType.decode(data)
        break

      case 3:
        field$price = string(data)
        break
    }
  }
  return {
    marketId: field$marketId,
    updateType: field$updateType,
    price: field$price
  }
}
