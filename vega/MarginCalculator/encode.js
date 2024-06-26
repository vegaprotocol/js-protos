/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { bool } = require('protobuf-codec/encode/types')
const _vega_ScalingFactors = require('./../ScalingFactors/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.scalingFactors)
    writer.bytes(1, _vega_ScalingFactors.encode(obj.scalingFactors))
  if (obj.fullyCollateralised) writer.varint(2, obj.fullyCollateralised, bool)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
