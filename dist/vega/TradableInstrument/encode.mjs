import Writer from "protobuf-codec/encode/writer.mjs"
import {} from "protobuf-codec/encode/types.mjs"
import * as Instrument from "./../Instrument/encode.mjs"
import * as MarginCalculator from "./../MarginCalculator/encode.mjs"
import * as LogNormalRiskModel from "./../LogNormalRiskModel/encode.mjs"
import * as SimpleRiskModel from "./../SimpleRiskModel/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.instrument) writer.bytes(1, Instrument.encode(obj.instrument))
  if (obj.marginCalculator)
    writer.bytes(2, MarginCalculator.encode(obj.marginCalculator))

  if (obj.risk_model) {
    const _o = obj.risk_model
    if (_o.logNormalRiskModel)
      writer.bytes(100, LogNormalRiskModel.encode(_o.logNormalRiskModel))
    if (_o.simpleRiskModel)
      writer.bytes(101, SimpleRiskModel.encode(_o.simpleRiskModel))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
