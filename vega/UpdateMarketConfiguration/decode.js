/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_UpdateInstrumentConfiguration = require('./../UpdateInstrumentConfiguration/decode.js')
const _vega_PriceMonitoringParameters = require('./../PriceMonitoringParameters/decode.js')
const _vega_LiquidityMonitoringParameters = require('./../LiquidityMonitoringParameters/decode.js')
const _vega_SimpleModelParams = require('./../SimpleModelParams/decode.js')
const _vega_LogNormalRiskModel = require('./../LogNormalRiskModel/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$instrument = {}
  const field$metadata = []
  let field$priceMonitoringParameters = {}
  let field$liquidityMonitoringParameters = {}
  let field$lpPriceRange = ''
  let field$linearSlippageFactor = ''
  let field$quadraticSlippageFactor = ''
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
    riskParameters: field$riskParameters
  }
}
