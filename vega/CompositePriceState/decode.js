/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_CompositePriceSource = require('./../CompositePriceSource/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  const field$priceSources = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$priceSources.push(_vega_CompositePriceSource.decode(data))
        break
    }
  }
  return { priceSources: field$priceSources }
}