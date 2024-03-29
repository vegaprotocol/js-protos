/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, int64 } = require('protobuf-codec/decode/types')
const _vega_TargetStakeParameters = require('./../TargetStakeParameters/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$targetStakeParameters = {}
  let field$triggeringRatio = ''
  let field$auctionExtension = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$targetStakeParameters = _vega_TargetStakeParameters.decode(data)
        break

      case 2:
        field$triggeringRatio = string(data)
        break

      case 3:
        field$auctionExtension = int64(data)
        break
    }
  }
  return {
    targetStakeParameters: field$targetStakeParameters,
    triggeringRatio: field$triggeringRatio,
    auctionExtension: field$auctionExtension
  }
}
