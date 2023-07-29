/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_PriceMonitoringParameters = require('./../PriceMonitoringParameters/decode.js')
const _vega_TargetStakeParameters = require('./../TargetStakeParameters/decode.js')
const _vega_SimpleModelParams = require('./../SimpleModelParams/decode.js')
const _vega_LogNormalRiskModel = require('./../LogNormalRiskModel/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  const field$metadata = []
  let field$priceMonitoringParameters = {}
  let field$targetStakeParameters = {}
  let field$risk_parameters = null
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
        field$risk_parameters = { simple: _vega_SimpleModelParams.decode(data) }
        break

      case 101:
        field$risk_parameters = {
          logNormal: _vega_LogNormalRiskModel.decode(data)
        }
        break
    }
  }
  return {
    metadata: field$metadata,
    priceMonitoringParameters: field$priceMonitoringParameters,
    targetStakeParameters: field$targetStakeParameters,
    risk_parameters: field$risk_parameters
  }
}