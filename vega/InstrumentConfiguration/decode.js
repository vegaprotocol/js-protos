/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_FutureProduct = require('./../FutureProduct/decode.js')
const _vega_SpotProduct = require('./../SpotProduct/decode.js')
const _vega_PerpetualProduct = require('./../PerpetualProduct/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$name = ''
  let field$code = ''
  let field$product = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$name = string(data)
        break

      case 2:
        field$code = string(data)
        break

      case 100:
        field$product = { future: _vega_FutureProduct.decode(data) }
        break

      case 101:
        field$product = { spot: _vega_SpotProduct.decode(data) }
        break

      case 102:
        field$product = { perpetual: _vega_PerpetualProduct.decode(data) }
        break
    }
  }
  return { name: field$name, code: field$code, product: field$product }
}
