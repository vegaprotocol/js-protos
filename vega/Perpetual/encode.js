/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_DataSourceSpec = require('./../DataSourceSpec/encode.js')
const _vega_DataSourceSpecToPerpetualBinding = require('./../DataSourceSpecToPerpetualBinding/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.settlementAsset) writer.bytes(1, obj.settlementAsset, string)
  if (obj.quoteName) writer.bytes(2, obj.quoteName, string)
  if (obj.marginFundingFactor) writer.bytes(3, obj.marginFundingFactor, string)
  if (obj.interestRate) writer.bytes(4, obj.interestRate, string)
  if (obj.clampLowerBound) writer.bytes(5, obj.clampLowerBound, string)
  if (obj.clampUpperBound) writer.bytes(6, obj.clampUpperBound, string)
  if (obj.dataSourceSpecForSettlementSchedule)
    writer.bytes(
      7,
      _vega_DataSourceSpec.encode(obj.dataSourceSpecForSettlementSchedule)
    )
  if (obj.dataSourceSpecForSettlementData)
    writer.bytes(
      8,
      _vega_DataSourceSpec.encode(obj.dataSourceSpecForSettlementData)
    )
  if (obj.dataSourceSpecBinding)
    writer.bytes(
      9,
      _vega_DataSourceSpecToPerpetualBinding.encode(obj.dataSourceSpecBinding)
    )
  if (obj.fundingRateScalingFactor)
    writer.bytes(10, obj.fundingRateScalingFactor, string)
  if (obj.fundingRateLowerBound)
    writer.bytes(11, obj.fundingRateLowerBound, string)
  if (obj.fundingRateUpperBound)
    writer.bytes(12, obj.fundingRateUpperBound, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
