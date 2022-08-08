import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as UpdateInstrumentConfiguration from "./../UpdateInstrumentConfiguration/decode.mjs"
import * as PriceMonitoringParameters from "./../PriceMonitoringParameters/decode.mjs"
import * as LiquidityMonitoringParameters from "./../LiquidityMonitoringParameters/decode.mjs"
import * as SimpleModelParams from "./../SimpleModelParams/decode.mjs"
import * as LogNormalRiskModel from "./../LogNormalRiskModel/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let instrument = {}
  const metadata = []
  let priceMonitoringParameters = {}
  let liquidityMonitoringParameters = {}
  let simple = {}
  let logNormal = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        instrument = data
        break
      case 2:
        metadata.push(data)
        break
      case 3:
        priceMonitoringParameters = data
        break
      case 4:
        liquidityMonitoringParameters = data
        break
      case 100:
        simple = data
        break
      case 101:
        logNormal = data
        break
    }
  }

  return {
    instrument,
    metadata,
    priceMonitoringParameters,
    liquidityMonitoringParameters,
    simple,
    logNormal,
  }
}
