/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_UpdateInstrumentConfiguration = require('./../UpdateInstrumentConfiguration/decode.js')
const _vega_PriceMonitoringParameters = require('./../PriceMonitoringParameters/decode.js')
const _vega_LiquidityMonitoringParameters = require('./../LiquidityMonitoringParameters/decode.js')
const _vega_SimpleModelParams = require('./../SimpleModelParams/decode.js')
const _vega_LogNormalRiskModel = require('./../LogNormalRiskModel/decode.js')
const _vega_LiquiditySLAParameters = require('./../LiquiditySLAParameters/decode.js')
const _vega_LiquidityFeeSettings = require('./../LiquidityFeeSettings/decode.js')
const _vega_LiquidationStrategy = require('./../LiquidationStrategy/decode.js')
const _vega_CompositePriceConfiguration = require('./../CompositePriceConfiguration/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$instrument = {}
  const field$metadata = []
  let field$priceMonitoringParameters = {}
  let field$liquidityMonitoringParameters = {}
  let field$lpPriceRange = null
  let field$linearSlippageFactor = ''
  let field$quadraticSlippageFactor = ''
  let field$liquiditySlaParameters = {}
  let field$liquidityFeeSettings = {}
  let field$liquidationStrategy = {}
  let field$markPriceConfiguration = {}
  let field$riskParameters = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$instrument = _vega_UpdateInstrumentConfiguration.decode(data)
        break

      case 2:
        field$metadata.push(string(data))
        break

      case 3:
        field$priceMonitoringParameters =
          _vega_PriceMonitoringParameters.decode(data)
        break

      case 4:
        field$liquidityMonitoringParameters =
          _vega_LiquidityMonitoringParameters.decode(data)
        break

      case 100:
        field$riskParameters = { simple: _vega_SimpleModelParams.decode(data) }
        break

      case 101:
        field$riskParameters = {
          logNormal: _vega_LogNormalRiskModel.decode(data)
        }
        break

      case 5:
        field$lpPriceRange = string(data)
        break

      case 6:
        field$linearSlippageFactor = string(data)
        break

      case 7:
        field$quadraticSlippageFactor = string(data)
        break

      case 8:
        field$liquiditySlaParameters = _vega_LiquiditySLAParameters.decode(data)
        break

      case 9:
        field$liquidityFeeSettings = _vega_LiquidityFeeSettings.decode(data)
        break

      case 10:
        field$liquidationStrategy = _vega_LiquidationStrategy.decode(data)
        break

      case 11:
        field$markPriceConfiguration =
          _vega_CompositePriceConfiguration.decode(data)
        break
    }
  }
  return {
    instrument: field$instrument,
    metadata: field$metadata,
    priceMonitoringParameters: field$priceMonitoringParameters,
    liquidityMonitoringParameters: field$liquidityMonitoringParameters,
    lpPriceRange: field$lpPriceRange,
    linearSlippageFactor: field$linearSlippageFactor,
    quadraticSlippageFactor: field$quadraticSlippageFactor,
    liquiditySlaParameters: field$liquiditySlaParameters,
    liquidityFeeSettings: field$liquidityFeeSettings,
    liquidationStrategy: field$liquidationStrategy,
    markPriceConfiguration: field$markPriceConfiguration,
    riskParameters: field$riskParameters
  }
}
