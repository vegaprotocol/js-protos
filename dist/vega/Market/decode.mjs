import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64 } from "protobuf-codec/decode/types.mjs"
import * as TradableInstrument from "./../TradableInstrument/decode.mjs"
import * as Fees from "./../Fees/decode.mjs"
import * as AuctionDuration from "./../AuctionDuration/decode.mjs"
import * as PriceMonitoringSettings from "./../PriceMonitoringSettings/decode.mjs"
import * as LiquidityMonitoringParameters from "./../LiquidityMonitoringParameters/decode.mjs"
import * as TradingMode from "./TradingMode.mjs"
import * as State from "./State.mjs"
import * as MarketTimestamps from "./../MarketTimestamps/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let tradableInstrument = {}
  let decimalPlaces = 0n
  let fees = {}
  let openingAuction = {}
  let priceMonitoringSettings = {}
  let liquidityMonitoringParameters = {}
  let tradingMode = 0
  let state = 0
  let marketTimestamps = {}
  let positionDecimalPlaces = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        tradableInstrument = data
        break
      case 3:
        decimalPlaces = data
        break
      case 4:
        fees = data
        break
      case 5:
        openingAuction = data
        break
      case 6:
        priceMonitoringSettings = data
        break
      case 7:
        liquidityMonitoringParameters = data
        break
      case 8:
        tradingMode = data
        break
      case 9:
        state = data
        break
      case 10:
        marketTimestamps = data
        break
      case 11:
        positionDecimalPlaces = data
        break
    }
  }

  return {
    id,
    tradableInstrument,
    decimalPlaces,
    fees,
    openingAuction,
    priceMonitoringSettings,
    liquidityMonitoringParameters,
    tradingMode,
    state,
    marketTimestamps,
    positionDecimalPlaces,
  }
}
