/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_FeeFactors = require('./../FeeFactors/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$factors = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$factors = _vega_FeeFactors.decode(data)
        break
    }
  }
  return { factors: field$factors }
}
