/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { uint64, string, int64 } = require('protobuf-codec/encode/types')
const _vega_InstrumentConfiguration = require('./../InstrumentConfiguration/encode.js')
const _vega_PriceMonitoringParameters = require('./../PriceMonitoringParameters/encode.js')
const _vega_LiquidityMonitoringParameters = require('./../LiquidityMonitoringParameters/encode.js')
const _vega_SimpleModelParams = require('./../SimpleModelParams/encode.js')
const _vega_LogNormalRiskModel = require('./../LogNormalRiskModel/encode.js')
const _vega_SuccessorConfiguration = require('./../SuccessorConfiguration/encode.js')
const _vega_LiquiditySLAParameters = require('./../LiquiditySLAParameters/encode.js')
const _vega_LiquidityFeeSettings = require('./../LiquidityFeeSettings/encode.js')
const _vega_LiquidationStrategy = require('./../LiquidationStrategy/encode.js')
const _vega_CompositePriceConfiguration = require('./../CompositePriceConfiguration/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.instrument)
    writer.bytes(1, _vega_InstrumentConfiguration.encode(obj.instrument))
  if (obj.decimalPlaces) writer.varint(2, obj.decimalPlaces, uint64)
  if (obj.metadata?.length)
    obj.metadata.forEach((v) => writer.bytes(3, v, string))
  if (obj.priceMonitoringParameters)
    writer.bytes(
      4,
      _vega_PriceMonitoringParameters.encode(obj.priceMonitoringParameters)
    )
  if (obj.liquidityMonitoringParameters)
    writer.bytes(
      5,
      _vega_LiquidityMonitoringParameters.encode(
        obj.liquidityMonitoringParameters
      )
    )
  if (obj.positionDecimalPlaces)
    writer.varint(6, obj.positionDecimalPlaces, int64)
  if (obj.lpPriceRange) writer.bytes(8, obj.lpPriceRange, string)
  if (obj.linearSlippageFactor)
    writer.bytes(9, obj.linearSlippageFactor, string)
  if (obj.quadraticSlippageFactor)
    writer.bytes(10, obj.quadraticSlippageFactor, string)
  if (obj.successor)
    writer.bytes(11, _vega_SuccessorConfiguration.encode(obj.successor))
  if (obj.liquiditySlaParameters)
    writer.bytes(
      12,
      _vega_LiquiditySLAParameters.encode(obj.liquiditySlaParameters)
    )
  if (obj.liquidityFeeSettings)
    writer.bytes(
      13,
      _vega_LiquidityFeeSettings.encode(obj.liquidityFeeSettings)
    )
  if (obj.liquidationStrategy)
    writer.bytes(14, _vega_LiquidationStrategy.encode(obj.liquidationStrategy))
  if (obj.markPriceConfiguration)
    writer.bytes(
      15,
      _vega_CompositePriceConfiguration.encode(obj.markPriceConfiguration)
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
