/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_Metadata = require('./../../../Metadata/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$alias = ''
  const field$metadata = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$alias = string(data)
        break

      case 2:
        field$metadata.push(_vega_Metadata.decode(data))
        break
    }
  }
  return { alias: field$alias, metadata: field$metadata }
}
