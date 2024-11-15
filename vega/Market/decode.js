/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64, int64, bool } = require('protobuf-codec/decode/types')
const _vega_TradableInstrument = require('./../TradableInstrument/decode.js')
const _vega_Fees = require('./../Fees/decode.js')
const _vega_AuctionDuration = require('./../AuctionDuration/decode.js')
const _vega_PriceMonitoringSettings = require('./../PriceMonitoringSettings/decode.js')
const _vega_LiquidityMonitoringParameters = require('./../LiquidityMonitoringParameters/decode.js')
const _vega_Market_TradingMode = require('./TradingMode.js')
const _vega_Market_State = require('./State.js')
const _vega_MarketTimestamps = require('./../MarketTimestamps/decode.js')
const _vega_LiquiditySLAParameters = require('./../LiquiditySLAParameters/decode.js')
const _vega_LiquidationStrategy = require('./../LiquidationStrategy/decode.js')
const _vega_CompositePriceConfiguration = require('./../CompositePriceConfiguration/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$id = ''
  let field$tradableInstrument = {}
  let field$decimalPlaces = 0n
  let field$fees = {}
  let field$openingAuction = {}
  let field$priceMonitoringSettings = {}
  let field$liquidityMonitoringParameters = {}
  let field$tradingMode = _vega_Market_TradingMode.decode(0)
  let field$state = _vega_Market_State.decode(0)
  let field$marketTimestamps = {}
  let field$positionDecimalPlaces = 0n
  let field$lpPriceRange = ''
  let field$linearSlippageFactor = ''
  let field$quadraticSlippageFactor = ''
  let field$parentMarketId = null
  let field$insurancePoolFraction = null
  let field$successorMarketId = null
  let field$liquiditySlaParams = null
  let field$liquidationStrategy = {}
  let field$markPriceConfiguration = {}
  let field$tickSize = ''
  let field$enableTransactionReordering = false
  let field$allowedEmptyAmmLevels = 0n
  const field$allowedSellers = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$tradableInstrument = _vega_TradableInstrument.decode(data)
        break

      case 3:
        field$decimalPlaces = uint64(data)
        break

      case 4:
        field$fees = _vega_Fees.decode(data)
        break

      case 5:
        field$openingAuction = _vega_AuctionDuration.decode(data)
        break

      case 6:
        field$priceMonitoringSettings =
          _vega_PriceMonitoringSettings.decode(data)
        break

      case 7:
        field$liquidityMonitoringParameters =
          _vega_LiquidityMonitoringParameters.decode(data)
        break

      case 8:
        field$tradingMode = _vega_Market_TradingMode.decode(data)
        break

      case 9:
        field$state = _vega_Market_State.decode(data)
        break

      case 10:
        field$marketTimestamps = _vega_MarketTimestamps.decode(data)
        break

      case 11:
        field$positionDecimalPlaces = int64(data)
        break

      case 12:
        field$lpPriceRange = string(data)
        break

      case 13:
        field$linearSlippageFactor = string(data)
        break

      case 14:
        field$quadraticSlippageFactor = string(data)
        break

      case 15:
        field$parentMarketId = string(data)
        break

      case 16:
        field$insurancePoolFraction = string(data)
        break

      case 17:
        field$successorMarketId = string(data)
        break

      case 18:
        field$liquiditySlaParams = _vega_LiquiditySLAParameters.decode(data)
        break

      case 19:
        field$liquidationStrategy = _vega_LiquidationStrategy.decode(data)
        break

      case 20:
        field$markPriceConfiguration =
          _vega_CompositePriceConfiguration.decode(data)
        break

      case 21:
        field$tickSize = string(data)
        break

      case 22:
        field$enableTransactionReordering = bool(data)
        break

      case 23:
        field$allowedEmptyAmmLevels = uint64(data)
        break

      case 24:
        field$allowedSellers.push(string(data))
        break
    }
  }
  return {
    id: field$id,
    tradableInstrument: field$tradableInstrument,
    decimalPlaces: field$decimalPlaces,
    fees: field$fees,
    openingAuction: field$openingAuction,
    priceMonitoringSettings: field$priceMonitoringSettings,
    liquidityMonitoringParameters: field$liquidityMonitoringParameters,
    tradingMode: field$tradingMode,
    state: field$state,
    marketTimestamps: field$marketTimestamps,
    positionDecimalPlaces: field$positionDecimalPlaces,
    lpPriceRange: field$lpPriceRange,
    linearSlippageFactor: field$linearSlippageFactor,
    quadraticSlippageFactor: field$quadraticSlippageFactor,
    parentMarketId: field$parentMarketId,
    insurancePoolFraction: field$insurancePoolFraction,
    successorMarketId: field$successorMarketId,
    liquiditySlaParams: field$liquiditySlaParams,
    liquidationStrategy: field$liquidationStrategy,
    markPriceConfiguration: field$markPriceConfiguration,
    tickSize: field$tickSize,
    enableTransactionReordering: field$enableTransactionReordering,
    allowedEmptyAmmLevels: field$allowedEmptyAmmLevels,
    allowedSellers: field$allowedSellers
  }
}
