/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_DispatchMetric = require('./../DispatchMetric.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$assetForMetric = ''
  let field$metric = _vega_DispatchMetric.decode(0)
  const field$markets = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$assetForMetric = string(data)
        break

      case 2:
        field$metric = _vega_DispatchMetric.decode(data)
        break

      case 3:
        field$markets.push(string(data))
        break
    }
  }
  return {
    assetForMetric: field$assetForMetric,
    metric: field$metric,
    markets: field$markets
  }
}
