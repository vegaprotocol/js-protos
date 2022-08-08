import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as UpdateInstrumentConfiguration from "./../UpdateInstrumentConfiguration/encode.mjs"
import * as PriceMonitoringParameters from "./../PriceMonitoringParameters/encode.mjs"
import * as LiquidityMonitoringParameters from "./../LiquidityMonitoringParameters/encode.mjs"
import * as SimpleModelParams from "./../SimpleModelParams/encode.mjs"
import * as LogNormalRiskModel from "./../LogNormalRiskModel/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.instrument)
    writer.bytes(1, UpdateInstrumentConfiguration.encode(obj.instrument))
  if (obj.metadata?.length)
    obj.metadata.forEach((v) => writer.bytes(2, v, string))
  if (obj.priceMonitoringParameters)
    writer.bytes(
      3,
      PriceMonitoringParameters.encode(obj.priceMonitoringParameters)
    )
  if (obj.liquidityMonitoringParameters)
    writer.bytes(
      4,
      LiquidityMonitoringParameters.encode(obj.liquidityMonitoringParameters)
    )

  if (obj.risk_parameters) {
    const _o = obj.risk_parameters
    if (_o.simple) writer.bytes(100, SimpleModelParams.encode(_o.simple))
    if (_o.logNormal) writer.bytes(101, LogNormalRiskModel.encode(_o.logNormal))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
