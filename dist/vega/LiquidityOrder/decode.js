/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { uint32, string } = require('protobuf-codec/decode/types')
const _vega_PeggedReference = require('./../PeggedReference.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$reference = 0
  let field$proportion = 0
  let field$offset = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$reference = _vega_PeggedReference.decode(data)
        break

      case 2:
        field$proportion = uint32(data)
        break

      case 3:
        field$offset = string(data)
        break
    }
  }
  return {
    reference: field$reference,
    proportion: field$proportion,
    offset: field$offset
  }
}
