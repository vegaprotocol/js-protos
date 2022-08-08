import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint32 } from "protobuf-codec/encode/types.mjs"
import * as OracleSpecConfiguration from "./../../oracles/v1/OracleSpecConfiguration/encode.mjs"
import * as OracleSpecToFutureBinding from "./../OracleSpecToFutureBinding/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.quoteName) writer.bytes(1, obj.quoteName, string)
  if (obj.oracleSpecForSettlementPrice)
    writer.bytes(
      2,
      OracleSpecConfiguration.encode(obj.oracleSpecForSettlementPrice)
    )
  if (obj.oracleSpecForTradingTermination)
    writer.bytes(
      3,
      OracleSpecConfiguration.encode(obj.oracleSpecForTradingTermination)
    )
  if (obj.oracleSpecBinding)
    writer.bytes(4, OracleSpecToFutureBinding.encode(obj.oracleSpecBinding))
  if (obj.settlementPriceDecimals)
    writer.varint(5, obj.settlementPriceDecimals, uint32)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
