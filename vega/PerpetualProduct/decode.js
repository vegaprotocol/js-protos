/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_DataSourceDefinition = require('./../DataSourceDefinition/decode.js')
const _vega_DataSourceSpecToPerpetualBinding = require('./../DataSourceSpecToPerpetualBinding/decode.js')
const _vega_CompositePriceConfiguration = require('./../CompositePriceConfiguration/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$settlementAsset = ''
  let field$quoteName = ''
  let field$marginFundingFactor = ''
  let field$interestRate = ''
  let field$clampLowerBound = ''
  let field$clampUpperBound = ''
  let field$dataSourceSpecForSettlementSchedule = {}
  let field$dataSourceSpecForSettlementData = {}
  let field$dataSourceSpecBinding = {}
  let field$fundingRateScalingFactor = null
  let field$fundingRateLowerBound = null
  let field$fundingRateUpperBound = null
  let field$internalCompositePriceConfiguration = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$settlementAsset = string(data)
        break

      case 2:
        field$quoteName = string(data)
        break

      case 3:
        field$marginFundingFactor = string(data)
        break

      case 4:
        field$interestRate = string(data)
        break

      case 5:
        field$clampLowerBound = string(data)
        break

      case 6:
        field$clampUpperBound = string(data)
        break

      case 7:
        field$dataSourceSpecForSettlementSchedule =
          _vega_DataSourceDefinition.decode(data)
        break

      case 8:
        field$dataSourceSpecForSettlementData =
          _vega_DataSourceDefinition.decode(data)
        break

      case 9:
        field$dataSourceSpecBinding =
          _vega_DataSourceSpecToPerpetualBinding.decode(data)
        break

      case 10:
        field$fundingRateScalingFactor = string(data)
        break

      case 11:
        field$fundingRateLowerBound = string(data)
        break

      case 12:
        field$fundingRateUpperBound = string(data)
        break

      case 13:
        field$internalCompositePriceConfiguration =
          _vega_CompositePriceConfiguration.decode(data)
        break
    }
  }
  return {
    settlementAsset: field$settlementAsset,
    quoteName: field$quoteName,
    marginFundingFactor: field$marginFundingFactor,
    interestRate: field$interestRate,
    clampLowerBound: field$clampLowerBound,
    clampUpperBound: field$clampUpperBound,
    dataSourceSpecForSettlementSchedule:
      field$dataSourceSpecForSettlementSchedule,
    dataSourceSpecForSettlementData: field$dataSourceSpecForSettlementData,
    dataSourceSpecBinding: field$dataSourceSpecBinding,
    fundingRateScalingFactor: field$fundingRateScalingFactor,
    fundingRateLowerBound: field$fundingRateLowerBound,
    fundingRateUpperBound: field$fundingRateUpperBound,
    internalCompositePriceConfiguration:
      field$internalCompositePriceConfiguration
  }
}
