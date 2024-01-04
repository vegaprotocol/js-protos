/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_VolumeDiscountProgramChanges = require('./../VolumeDiscountProgramChanges/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$changes = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$changes = _vega_VolumeDiscountProgramChanges.decode(data)
        break
    }
  }
  return { changes: field$changes }
}
