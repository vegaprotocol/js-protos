import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64 } from "protobuf-codec/encode/types.mjs"
import * as TradableInstrument from "./../TradableInstrument/encode.mjs"
import * as Fees from "./../Fees/encode.mjs"
import * as AuctionDuration from "./../AuctionDuration/encode.mjs"
import * as PriceMonitoringSettings from "./../PriceMonitoringSettings/encode.mjs"
import * as LiquidityMonitoringParameters from "./../LiquidityMonitoringParameters/encode.mjs"
import * as TradingMode from "./TradingMode.mjs"
import * as State from "./State.mjs"
import * as MarketTimestamps from "./../MarketTimestamps/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.tradableInstrument)
    writer.bytes(2, TradableInstrument.encode(obj.tradableInstrument))
  if (obj.decimalPlaces) writer.varint(3, obj.decimalPlaces, uint64)
  if (obj.fees) writer.bytes(4, Fees.encode(obj.fees))
  if (obj.openingAuction)
    writer.bytes(5, AuctionDuration.encode(obj.openingAuction))
  if (obj.priceMonitoringSettings)
    writer.bytes(6, PriceMonitoringSettings.encode(obj.priceMonitoringSettings))
  if (obj.liquidityMonitoringParameters)
    writer.bytes(
      7,
      LiquidityMonitoringParameters.encode(obj.liquidityMonitoringParameters)
    )
  if (obj.tradingMode) writer.varint(8, obj.tradingMode, TradingMode)
  if (obj.state) writer.varint(9, obj.state, State)
  if (obj.marketTimestamps)
    writer.bytes(10, MarketTimestamps.encode(obj.marketTimestamps))
  if (obj.positionDecimalPlaces)
    writer.varint(11, obj.positionDecimalPlaces, uint64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
