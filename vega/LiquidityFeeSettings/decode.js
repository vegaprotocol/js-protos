/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_LiquidityFeeSettings_Method = require('./Method.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$method = _vega_LiquidityFeeSettings_Method.decode(0)
  let field$feeConstant = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$method = _vega_LiquidityFeeSettings_Method.decode(data)
        break

      case 2:
        field$feeConstant = string(data)
        break
    }
  }
  return { method: field$method, feeConstant: field$feeConstant }
}
