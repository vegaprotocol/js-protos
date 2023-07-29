/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$makerFee = ''
  let field$infrastructureFee = ''
  let field$liquidityFee = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$makerFee = string(data)
        break

      case 2:
        field$infrastructureFee = string(data)
        break

      case 3:
        field$liquidityFee = string(data)
        break
    }
  }
  return {
    makerFee: field$makerFee,
    infrastructureFee: field$infrastructureFee,
    liquidityFee: field$liquidityFee
  }
}