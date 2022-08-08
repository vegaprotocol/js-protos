import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as Instrument from "./../Instrument/decode.mjs"
import * as MarginCalculator from "./../MarginCalculator/decode.mjs"
import * as LogNormalRiskModel from "./../LogNormalRiskModel/decode.mjs"
import * as SimpleRiskModel from "./../SimpleRiskModel/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let instrument = {}
  let marginCalculator = {}
  let logNormalRiskModel = {}
  let simpleRiskModel = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        instrument = data
        break
      case 2:
        marginCalculator = data
        break
      case 100:
        logNormalRiskModel = data
        break
      case 101:
        simpleRiskModel = data
        break
    }
  }

  return {
    instrument,
    marginCalculator,
    logNormalRiskModel,
    simpleRiskModel,
  }
}
