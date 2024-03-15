/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_PriceMonitoringParameters = require('./../PriceMonitoringParameters/decode.js')
const _vega_TargetStakeParameters = require('./../TargetStakeParameters/decode.js')
const _vega_SimpleModelParams = require('./../SimpleModelParams/decode.js')
const _vega_LogNormalRiskModel = require('./../LogNormalRiskModel/decode.js')
const _vega_LiquiditySLAParameters = require('./../LiquiditySLAParameters/decode.js')
const _vega_LiquidityFeeSettings = require('./../LiquidityFeeSettings/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  const field$metadata = []
  let field$priceMonitoringParameters = {}
  let field$targetStakeParameters = {}
  let field$slaParams = {}
  let field$liquidityFeeSettings = {}
  let field$tickSize = ''
  let field$riskParameters = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$metadata.push(string(data))
        break

      case 2:
        field$priceMonitoringParameters =
          _vega_PriceMonitoringParameters.decode(data)
        break

      case 3:
        field$targetStakeParameters = _vega_TargetStakeParameters.decode(data)
        break

      case 100:
        field$riskParameters = { simple: _vega_SimpleModelParams.decode(data) }
        break

      case 101:
        field$riskParameters = {
          logNormal: _vega_LogNormalRiskModel.decode(data)
        }
        break

      case 4:
        field$slaParams = _vega_LiquiditySLAParameters.decode(data)
        break

      case 5:
        field$liquidityFeeSettings = _vega_LiquidityFeeSettings.decode(data)
        break

      case 6:
        field$tickSize = string(data)
        break
    }
  }
  return {
    metadata: field$metadata,
    priceMonitoringParameters: field$priceMonitoringParameters,
    targetStakeParameters: field$targetStakeParameters,
    slaParams: field$slaParams,
    liquidityFeeSettings: field$liquidityFeeSettings,
    tickSize: field$tickSize,
    riskParameters: field$riskParameters
  }
}
