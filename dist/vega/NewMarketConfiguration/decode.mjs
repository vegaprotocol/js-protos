import reader from "protobuf-codec/decode/reader.mjs"
import { uint64, string } from "protobuf-codec/decode/types.mjs"
import * as InstrumentConfiguration from "./../InstrumentConfiguration/decode.mjs"
import * as PriceMonitoringParameters from "./../PriceMonitoringParameters/decode.mjs"
import * as LiquidityMonitoringParameters from "./../LiquidityMonitoringParameters/decode.mjs"
import * as SimpleModelParams from "./../SimpleModelParams/decode.mjs"
import * as LogNormalRiskModel from "./../LogNormalRiskModel/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let instrument = {}
  let decimalPlaces = 0n
  const metadata = []
  let priceMonitoringParameters = {}
  let liquidityMonitoringParameters = {}
  let simple = {}
  let logNormal = {}
  let positionDecimalPlaces = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        instrument = data
        break
      case 2:
        decimalPlaces = data
        break
      case 3:
        metadata.push(data)
        break
      case 4:
        priceMonitoringParameters = data
        break
      case 5:
        liquidityMonitoringParameters = data
        break
      case 100:
        simple = data
        break
      case 101:
        logNormal = data
        break
      case 6:
        positionDecimalPlaces = data
        break
    }
  }

  return {
    instrument,
    decimalPlaces,
    metadata,
    priceMonitoringParameters,
    liquidityMonitoringParameters,
    simple,
    logNormal,
    positionDecimalPlaces,
  }
}
