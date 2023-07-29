/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$parentMarketId = ''
  let field$insurancePoolFraction = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$parentMarketId = string(data)
        break

      case 2:
        field$insurancePoolFraction = string(data)
        break
    }
  }
  return {
    parentMarketId: field$parentMarketId,
    insurancePoolFraction: field$insurancePoolFraction
  }
}
