/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_DataSourceSpecConfiguration = require('./../DataSourceSpecConfiguration/decode.js')
const _vega_EthCallSpec = require('./../EthCallSpec/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$source_type = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$source_type = {
          oracle: _vega_DataSourceSpecConfiguration.decode(data)
        }
        break

      case 2:
        field$source_type = { ethCall: _vega_EthCallSpec.decode(data) }
        break
    }
  }
  return { source_type: field$source_type }
}