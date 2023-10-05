/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_UpdateInstrumentConfiguration = require('./../UpdateInstrumentConfiguration/encode.js')
const _vega_PriceMonitoringParameters = require('./../PriceMonitoringParameters/encode.js')
const _vega_LiquidityMonitoringParameters = require('./../LiquidityMonitoringParameters/encode.js')
const _vega_SimpleModelParams = require('./../SimpleModelParams/encode.js')
const _vega_LogNormalRiskModel = require('./../LogNormalRiskModel/encode.js')
const _vega_LiquiditySLAParameters = require('./../LiquiditySLAParameters/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.instrument)
    writer.bytes(1, _vega_UpdateInstrumentConfiguration.encode(obj.instrument))
  if (obj.metadata?.length)
    obj.metadata.forEach((v) => writer.bytes(2, v, string))
  if (obj.priceMonitoringParameters)
    writer.bytes(
      3,
      _vega_PriceMonitoringParameters.encode(obj.priceMonitoringParameters)
    )
  if (obj.liquidityMonitoringParameters)
    writer.bytes(
      4,
      _vega_LiquidityMonitoringParameters.encode(
        obj.liquidityMonitoringParameters
      )
    )
  if (obj.lpPriceRange) writer.bytes(5, obj.lpPriceRange, string)
  if (obj.linearSlippageFactor)
    writer.bytes(6, obj.linearSlippageFactor, string)
  if (obj.quadraticSlippageFactor)
    writer.bytes(7, obj.quadraticSlippageFactor, string)
  if (obj.liquiditySlaParameters)
    writer.bytes(
      8,
      _vega_LiquiditySLAParameters.encode(obj.liquiditySlaParameters)
    )

  if (obj.riskParameters?.simple ?? obj.simple)
    writer.bytes(
      100,
      _vega_SimpleModelParams.encode(obj.riskParameters?.simple ?? obj.simple)
    )
  if (obj.riskParameters?.logNormal ?? obj.logNormal)
    writer.bytes(
      101,
      _vega_LogNormalRiskModel.encode(
        obj.riskParameters?.logNormal ?? obj.logNormal
      )
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
