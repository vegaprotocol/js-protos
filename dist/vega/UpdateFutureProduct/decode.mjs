import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint32 } from "protobuf-codec/decode/types.mjs"
import * as OracleSpecConfiguration from "./../../oracles/v1/OracleSpecConfiguration/decode.mjs"
import * as OracleSpecToFutureBinding from "./../OracleSpecToFutureBinding/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let quoteName = {}
  let oracleSpecForSettlementPrice = {}
  let oracleSpecForTradingTermination = {}
  let oracleSpecBinding = {}
  let settlementPriceDecimals = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        quoteName = data
        break
      case 2:
        oracleSpecForSettlementPrice = data
        break
      case 3:
        oracleSpecForTradingTermination = data
        break
      case 4:
        oracleSpecBinding = data
        break
      case 5:
        settlementPriceDecimals = data
        break
    }
  }

  return {
    quoteName,
    oracleSpecForSettlementPrice,
    oracleSpecForTradingTermination,
    oracleSpecBinding,
    settlementPriceDecimals,
  }
}
