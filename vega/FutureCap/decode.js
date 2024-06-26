/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, bool } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$maxPrice = ''
  let field$binarySettlement = null
  let field$fullyCollateralised = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$maxPrice = string(data)
        break

      case 2:
        field$binarySettlement = bool(data)
        break

      case 3:
        field$fullyCollateralised = bool(data)
        break
    }
  }
  return {
    maxPrice: field$maxPrice,
    binarySettlement: field$binarySettlement,
    fullyCollateralised: field$fullyCollateralised
  }
}
