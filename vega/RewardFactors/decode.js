/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$infrastructureRewardFactor = ''
  let field$liquidityRewardFactor = ''
  let field$makerRewardFactor = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$infrastructureRewardFactor = string(data)
        break

      case 2:
        field$liquidityRewardFactor = string(data)
        break

      case 3:
        field$makerRewardFactor = string(data)
        break
    }
  }
  return {
    infrastructureRewardFactor: field$infrastructureRewardFactor,
    liquidityRewardFactor: field$liquidityRewardFactor,
    makerRewardFactor: field$makerRewardFactor
  }
}
