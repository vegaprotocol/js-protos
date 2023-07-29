/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_ScalarValue = require('./../ScalarValue/decode.js')
const _vega_VectorValue = require('./../VectorValue/decode.js')
const _vega_MatrixValue = require('./../MatrixValue/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$value = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$value = { scalarVal: _vega_ScalarValue.decode(data) }
        break

      case 2:
        field$value = { vectorVal: _vega_VectorValue.decode(data) }
        break

      case 3:
        field$value = { matrixVal: _vega_MatrixValue.decode(data) }
        break
    }
  }
  return { value: field$value }
}