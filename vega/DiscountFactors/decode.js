/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$infrastructureDiscountFactor = ''
  let field$liquidityDiscountFactor = ''
  let field$makerDiscountFactor = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$infrastructureDiscountFactor = string(data)
        break

      case 2:
        field$liquidityDiscountFactor = string(data)
        break

      case 3:
        field$makerDiscountFactor = string(data)
        break
    }
  }
  return {
    infrastructureDiscountFactor: field$infrastructureDiscountFactor,
    liquidityDiscountFactor: field$liquidityDiscountFactor,
    makerDiscountFactor: field$makerDiscountFactor
  }
}
