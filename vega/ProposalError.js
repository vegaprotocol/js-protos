/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const PROPOSAL_ERROR_UNSPECIFIED = 0
const PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON = 1
const PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE = 2
const PROPOSAL_ERROR_ENACT_TIME_TOO_SOON = 3
const PROPOSAL_ERROR_ENACT_TIME_TOO_LATE = 4
const PROPOSAL_ERROR_INSUFFICIENT_TOKENS = 5
const PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY = 6
const PROPOSAL_ERROR_NO_PRODUCT = 7
const PROPOSAL_ERROR_UNSUPPORTED_PRODUCT = 8
const PROPOSAL_ERROR_NO_TRADING_MODE = 11
const PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE = 12
const PROPOSAL_ERROR_NODE_VALIDATION_FAILED = 13
const PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD = 14
const PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS = 15
const PROPOSAL_ERROR_INVALID_ASSET = 16
const PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS = 17
const PROPOSAL_ERROR_NO_RISK_PARAMETERS = 18
const PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY = 19
const PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE = 20
const PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED = 21
const PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL = 22
const PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE = 23
const PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET = 25
const PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT = 26
const PROPOSAL_ERROR_INVALID_RISK_PARAMETER = 30
const PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED = 31
const PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED = 32
const PROPOSAL_ERROR_INVALID_ASSET_DETAILS = 33
const PROPOSAL_ERROR_UNKNOWN_TYPE = 34
const PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE = 35
const PROPOSAL_ERROR_INVALID_FREEFORM = 36
const PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE = 37
const PROPOSAL_ERROR_INVALID_MARKET = 38
const PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES = 39
const PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS = 40
const PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE = 41
const PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE = 42
const PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE = 43
const PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE = 44
const PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE = 45
const PROPOSAL_ERROR_INVALID_SPOT = 46
const PROPOSAL_ERROR_SPOT_PRODUCT_DISABLED = 47
const PROPOSAL_ERROR_INVALID_SUCCESSOR_MARKET = 48
const PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_FAILED = 49
const PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_INVALID = 50
const PROPOSAL_ERROR_GOVERNANCE_CANCEL_TRANSFER_PROPOSAL_INVALID = 51

const enumValues = new Map([
  [0, 'PROPOSAL_ERROR_UNSPECIFIED'],
  [1, 'PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON'],
  [2, 'PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE'],
  [3, 'PROPOSAL_ERROR_ENACT_TIME_TOO_SOON'],
  [4, 'PROPOSAL_ERROR_ENACT_TIME_TOO_LATE'],
  [5, 'PROPOSAL_ERROR_INSUFFICIENT_TOKENS'],
  [6, 'PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY'],
  [7, 'PROPOSAL_ERROR_NO_PRODUCT'],
  [8, 'PROPOSAL_ERROR_UNSUPPORTED_PRODUCT'],
  [11, 'PROPOSAL_ERROR_NO_TRADING_MODE'],
  [12, 'PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE'],
  [13, 'PROPOSAL_ERROR_NODE_VALIDATION_FAILED'],
  [14, 'PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD'],
  [15, 'PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS'],
  [16, 'PROPOSAL_ERROR_INVALID_ASSET'],
  [17, 'PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS'],
  [18, 'PROPOSAL_ERROR_NO_RISK_PARAMETERS'],
  [19, 'PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY'],
  [20, 'PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE'],
  [21, 'PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED'],
  [22, 'PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL'],
  [23, 'PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE'],
  [25, 'PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET'],
  [26, 'PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT'],
  [30, 'PROPOSAL_ERROR_INVALID_RISK_PARAMETER'],
  [31, 'PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED'],
  [32, 'PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED'],
  [33, 'PROPOSAL_ERROR_INVALID_ASSET_DETAILS'],
  [34, 'PROPOSAL_ERROR_UNKNOWN_TYPE'],
  [35, 'PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE'],
  [36, 'PROPOSAL_ERROR_INVALID_FREEFORM'],
  [37, 'PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE'],
  [38, 'PROPOSAL_ERROR_INVALID_MARKET'],
  [39, 'PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES'],
  [40, 'PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS'],
  [41, 'PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE'],
  [42, 'PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE'],
  [43, 'PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE'],
  [44, 'PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE'],
  [45, 'PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE'],
  [46, 'PROPOSAL_ERROR_INVALID_SPOT'],
  [47, 'PROPOSAL_ERROR_SPOT_PRODUCT_DISABLED'],
  [48, 'PROPOSAL_ERROR_INVALID_SUCCESSOR_MARKET'],
  [49, 'PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_FAILED'],
  [50, 'PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_INVALID'],
  [51, 'PROPOSAL_ERROR_GOVERNANCE_CANCEL_TRANSFER_PROPOSAL_INVALID']
])
const enumNames = new Map([
  ['PROPOSAL_ERROR_UNSPECIFIED', 0],
  ['PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON', 1],
  ['PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE', 2],
  ['PROPOSAL_ERROR_ENACT_TIME_TOO_SOON', 3],
  ['PROPOSAL_ERROR_ENACT_TIME_TOO_LATE', 4],
  ['PROPOSAL_ERROR_INSUFFICIENT_TOKENS', 5],
  ['PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY', 6],
  ['PROPOSAL_ERROR_NO_PRODUCT', 7],
  ['PROPOSAL_ERROR_UNSUPPORTED_PRODUCT', 8],
  ['PROPOSAL_ERROR_NO_TRADING_MODE', 11],
  ['PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE', 12],
  ['PROPOSAL_ERROR_NODE_VALIDATION_FAILED', 13],
  ['PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD', 14],
  ['PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS', 15],
  ['PROPOSAL_ERROR_INVALID_ASSET', 16],
  ['PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS', 17],
  ['PROPOSAL_ERROR_NO_RISK_PARAMETERS', 18],
  ['PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY', 19],
  ['PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE', 20],
  ['PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED', 21],
  ['PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL', 22],
  ['PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE', 23],
  ['PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET', 25],
  ['PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT', 26],
  ['PROPOSAL_ERROR_INVALID_RISK_PARAMETER', 30],
  ['PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED', 31],
  ['PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED', 32],
  ['PROPOSAL_ERROR_INVALID_ASSET_DETAILS', 33],
  ['PROPOSAL_ERROR_UNKNOWN_TYPE', 34],
  ['PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE', 35],
  ['PROPOSAL_ERROR_INVALID_FREEFORM', 36],
  ['PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE', 37],
  ['PROPOSAL_ERROR_INVALID_MARKET', 38],
  ['PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES', 39],
  ['PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS', 40],
  ['PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE', 41],
  ['PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE', 42],
  ['PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE', 43],
  ['PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE', 44],
  ['PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE', 45],
  ['PROPOSAL_ERROR_INVALID_SPOT', 46],
  ['PROPOSAL_ERROR_SPOT_PRODUCT_DISABLED', 47],
  ['PROPOSAL_ERROR_INVALID_SUCCESSOR_MARKET', 48],
  ['PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_FAILED', 49],
  ['PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_INVALID', 50],
  ['PROPOSAL_ERROR_GOVERNANCE_CANCEL_TRANSFER_PROPOSAL_INVALID', 51]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid ProposalError value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid ProposalError value (' + value + ')')

  if (0 <= value && value <= 51) return 1

  // enumerable max value in case of unknown value
  return 5
}

/**
 * Convert an enum value to it's human readable name.
 * Returns undefined on an unknown value.
 */
function stringify(int) {
  return enumValues.get(int)
}

/**
 * Convert an enum string names to it's machine integer value.
 * Returns undefined on an unknown name.
 */
function parse(str) {
  return enumNames.get(str)
}

module.exports = {
  encode,
  decode,
  encodingLength,
  stringify,
  parse,
  PROPOSAL_ERROR_UNSPECIFIED,
  PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON,
  PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE,
  PROPOSAL_ERROR_ENACT_TIME_TOO_SOON,
  PROPOSAL_ERROR_ENACT_TIME_TOO_LATE,
  PROPOSAL_ERROR_INSUFFICIENT_TOKENS,
  PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY,
  PROPOSAL_ERROR_NO_PRODUCT,
  PROPOSAL_ERROR_UNSUPPORTED_PRODUCT,
  PROPOSAL_ERROR_NO_TRADING_MODE,
  PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE,
  PROPOSAL_ERROR_NODE_VALIDATION_FAILED,
  PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD,
  PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS,
  PROPOSAL_ERROR_INVALID_ASSET,
  PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS,
  PROPOSAL_ERROR_NO_RISK_PARAMETERS,
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY,
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE,
  PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED,
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL,
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE,
  PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET,
  PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT,
  PROPOSAL_ERROR_INVALID_RISK_PARAMETER,
  PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED,
  PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED,
  PROPOSAL_ERROR_INVALID_ASSET_DETAILS,
  PROPOSAL_ERROR_UNKNOWN_TYPE,
  PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE,
  PROPOSAL_ERROR_INVALID_FREEFORM,
  PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE,
  PROPOSAL_ERROR_INVALID_MARKET,
  PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES,
  PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS,
  PROPOSAL_ERROR_ERC20_ADDRESS_ALREADY_IN_USE,
  PROPOSAL_ERROR_LP_PRICE_RANGE_NONPOSITIVE,
  PROPOSAL_ERROR_LP_PRICE_RANGE_TOO_LARGE,
  PROPOSAL_ERROR_LINEAR_SLIPPAGE_FACTOR_OUT_OF_RANGE,
  PROPOSAL_ERROR_QUADRATIC_SLIPPAGE_FACTOR_OUT_OF_RANGE,
  PROPOSAL_ERROR_INVALID_SPOT,
  PROPOSAL_ERROR_SPOT_PRODUCT_DISABLED,
  PROPOSAL_ERROR_INVALID_SUCCESSOR_MARKET,
  PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_FAILED,
  PROPOSAL_ERROR_GOVERNANCE_TRANSFER_PROPOSAL_INVALID,
  PROPOSAL_ERROR_GOVERNANCE_CANCEL_TRANSFER_PROPOSAL_INVALID
}