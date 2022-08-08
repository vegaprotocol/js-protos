import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint32 } from "protobuf-codec/encode/types.mjs"
import * as OracleSpec from "./../../oracles/v1/OracleSpec/encode.mjs"
import * as OracleSpecToFutureBinding from "./../OracleSpecToFutureBinding/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.settlementAsset) writer.bytes(2, obj.settlementAsset, string)
  if (obj.quoteName) writer.bytes(4, obj.quoteName, string)
  if (obj.oracleSpecForSettlementPrice)
    writer.bytes(5, OracleSpec.encode(obj.oracleSpecForSettlementPrice))
  if (obj.oracleSpecForTradingTermination)
    writer.bytes(6, OracleSpec.encode(obj.oracleSpecForTradingTermination))
  if (obj.oracleSpecBinding)
    writer.bytes(7, OracleSpecToFutureBinding.encode(obj.oracleSpecBinding))
  if (obj.settlementPriceDecimals)
    writer.varint(8, obj.settlementPriceDecimals, uint32)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
