/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { uint64, string, int64 } = require('protobuf-codec/decode/types')
const _vega_InstrumentConfiguration = require('./../InstrumentConfiguration/decode.js')
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
  let field$instrument = {}
  let field$priceDecimalPlaces = 0n
  const field$metadata = []
  let field$priceMonitoringParameters = {}
  let field$targetStakeParameters = {}
  let field$sizeDecimalPlaces = 0n
  let field$slaParams = {}
  let field$liquidityFeeSettings = {}
  let field$tickSize = ''
  let field$riskParameters = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$instrument = _vega_InstrumentConfiguration.decode(data)
        break

      case 2:
        field$priceDecimalPlaces = uint64(data)
        break

      case 3:
        field$metadata.push(string(data))
        break

      case 4:
        field$priceMonitoringParameters =
          _vega_PriceMonitoringParameters.decode(data)
        break

      case 5:
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

      case 6:
        field$sizeDecimalPlaces = int64(data)
        break

      case 7:
        field$slaParams = _vega_LiquiditySLAParameters.decode(data)
        break

      case 8:
        field$liquidityFeeSettings = _vega_LiquidityFeeSettings.decode(data)
        break

      case 9:
        field$tickSize = string(data)
        break
    }
  }
  return {
    instrument: field$instrument,
    priceDecimalPlaces: field$priceDecimalPlaces,
    metadata: field$metadata,
    priceMonitoringParameters: field$priceMonitoringParameters,
    targetStakeParameters: field$targetStakeParameters,
    sizeDecimalPlaces: field$sizeDecimalPlaces,
    slaParams: field$slaParams,
    liquidityFeeSettings: field$liquidityFeeSettings,
    tickSize: field$tickSize,
    riskParameters: field$riskParameters
  }
}
