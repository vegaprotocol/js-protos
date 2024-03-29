/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_UpdateFutureProduct = require('./../UpdateFutureProduct/decode.js')
const _vega_UpdatePerpetualProduct = require('./../UpdatePerpetualProduct/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$code = ''
  let field$name = ''
  let field$product = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$code = string(data)
        break

      case 2:
        field$name = string(data)
        break

      case 100:
        field$product = { future: _vega_UpdateFutureProduct.decode(data) }
        break

      case 101:
        field$product = { perpetual: _vega_UpdatePerpetualProduct.decode(data) }
        break
    }
  }
  return { code: field$code, name: field$name, product: field$product }
}
