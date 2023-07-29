/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { uint64, string, int64 } = require('protobuf-codec/encode/types')
const _vega_InstrumentConfiguration = require('./../InstrumentConfiguration/encode.js')
const _vega_PriceMonitoringParameters = require('./../PriceMonitoringParameters/encode.js')
const _vega_TargetStakeParameters = require('./../TargetStakeParameters/encode.js')
const _vega_SimpleModelParams = require('./../SimpleModelParams/encode.js')
const _vega_LogNormalRiskModel = require('./../LogNormalRiskModel/encode.js')

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
  if (obj.targetStakeParameters)
    writer.bytes(
      5,
      _vega_TargetStakeParameters.encode(obj.targetStakeParameters)
    )
  if (obj.positionDecimalPlaces)
    writer.varint(6, obj.positionDecimalPlaces, int64)

  if (obj.risk_parameters?.simple ?? obj.simple)
    writer.bytes(
      100,
      _vega_SimpleModelParams.encode(obj.risk_parameters?.simple ?? obj.simple)
    )
  if (obj.risk_parameters?.logNormal ?? obj.logNormal)
    writer.bytes(
      101,
      _vega_LogNormalRiskModel.encode(
        obj.risk_parameters?.logNormal ?? obj.logNormal
      )
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
