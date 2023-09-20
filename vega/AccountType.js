/// autogenerated by protoc-plugin-js
const assert = require('nanoassert')
const { enumerable } = require('protobuf-codec/encode/types')
const { enumerable: decodeEnumerable } = require('protobuf-codec/decode/types')

const ACCOUNT_TYPE_UNSPECIFIED = 0
const ACCOUNT_TYPE_INSURANCE = 1
const ACCOUNT_TYPE_SETTLEMENT = 2
const ACCOUNT_TYPE_MARGIN = 3
const ACCOUNT_TYPE_GENERAL = 4
const ACCOUNT_TYPE_FEES_INFRASTRUCTURE = 5
const ACCOUNT_TYPE_FEES_LIQUIDITY = 6
const ACCOUNT_TYPE_FEES_MAKER = 7
const ACCOUNT_TYPE_BOND = 9
const ACCOUNT_TYPE_EXTERNAL = 10
const ACCOUNT_TYPE_GLOBAL_INSURANCE = 11
const ACCOUNT_TYPE_GLOBAL_REWARD = 12
const ACCOUNT_TYPE_PENDING_TRANSFERS = 13
const ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES = 14
const ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES = 15
const ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES = 16
const ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS = 17
const ACCOUNT_TYPE_HOLDING = 18
const ACCOUNT_TYPE_LP_LIQUIDITY_FEES = 19
const ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION = 20
const ACCOUNT_TYPE_NETWORK_TREASURY = 21
const ACCOUNT_TYPE_VESTING_REWARDS = 22
const ACCOUNT_TYPE_VESTED_REWARDS = 23
const ACCOUNT_TYPE_REWARD_AVERAGE_POSITION = 24
const ACCOUNT_TYPE_REWARD_RELATIVE_RETURN = 25
const ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY = 26
const ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING = 27
const ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD = 28

const enumValues = new Map([
  [0, 'ACCOUNT_TYPE_UNSPECIFIED'],
  [1, 'ACCOUNT_TYPE_INSURANCE'],
  [2, 'ACCOUNT_TYPE_SETTLEMENT'],
  [3, 'ACCOUNT_TYPE_MARGIN'],
  [4, 'ACCOUNT_TYPE_GENERAL'],
  [5, 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE'],
  [6, 'ACCOUNT_TYPE_FEES_LIQUIDITY'],
  [7, 'ACCOUNT_TYPE_FEES_MAKER'],
  [9, 'ACCOUNT_TYPE_BOND'],
  [10, 'ACCOUNT_TYPE_EXTERNAL'],
  [11, 'ACCOUNT_TYPE_GLOBAL_INSURANCE'],
  [12, 'ACCOUNT_TYPE_GLOBAL_REWARD'],
  [13, 'ACCOUNT_TYPE_PENDING_TRANSFERS'],
  [14, 'ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES'],
  [15, 'ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES'],
  [16, 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES'],
  [17, 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS'],
  [18, 'ACCOUNT_TYPE_HOLDING'],
  [19, 'ACCOUNT_TYPE_LP_LIQUIDITY_FEES'],
  [20, 'ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION'],
  [21, 'ACCOUNT_TYPE_NETWORK_TREASURY'],
  [22, 'ACCOUNT_TYPE_VESTING_REWARDS'],
  [23, 'ACCOUNT_TYPE_VESTED_REWARDS'],
  [24, 'ACCOUNT_TYPE_REWARD_AVERAGE_POSITION'],
  [25, 'ACCOUNT_TYPE_REWARD_RELATIVE_RETURN'],
  [26, 'ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY'],
  [27, 'ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING'],
  [28, 'ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD']
])
const enumNames = new Map([
  ['ACCOUNT_TYPE_UNSPECIFIED', 0],
  ['ACCOUNT_TYPE_INSURANCE', 1],
  ['ACCOUNT_TYPE_SETTLEMENT', 2],
  ['ACCOUNT_TYPE_MARGIN', 3],
  ['ACCOUNT_TYPE_GENERAL', 4],
  ['ACCOUNT_TYPE_FEES_INFRASTRUCTURE', 5],
  ['ACCOUNT_TYPE_FEES_LIQUIDITY', 6],
  ['ACCOUNT_TYPE_FEES_MAKER', 7],
  ['ACCOUNT_TYPE_BOND', 9],
  ['ACCOUNT_TYPE_EXTERNAL', 10],
  ['ACCOUNT_TYPE_GLOBAL_INSURANCE', 11],
  ['ACCOUNT_TYPE_GLOBAL_REWARD', 12],
  ['ACCOUNT_TYPE_PENDING_TRANSFERS', 13],
  ['ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES', 14],
  ['ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES', 15],
  ['ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES', 16],
  ['ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS', 17],
  ['ACCOUNT_TYPE_HOLDING', 18],
  ['ACCOUNT_TYPE_LP_LIQUIDITY_FEES', 19],
  ['ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION', 20],
  ['ACCOUNT_TYPE_NETWORK_TREASURY', 21],
  ['ACCOUNT_TYPE_VESTING_REWARDS', 22],
  ['ACCOUNT_TYPE_VESTED_REWARDS', 23],
  ['ACCOUNT_TYPE_REWARD_AVERAGE_POSITION', 24],
  ['ACCOUNT_TYPE_REWARD_RELATIVE_RETURN', 25],
  ['ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY', 26],
  ['ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING', 27],
  ['ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD', 28]
])

function encode(value, buf, byteOffset = 0) {
  if (typeof value === 'string') return encode(parse(value), buf, byteOffset)
  if (value == null)
    throw new Error('Invalid AccountType value (' + value + ')')

  return enumerable.encode(value, buf, byteOffset)
}

function decode(varint) {
  const int = decodeEnumerable(varint)

  return stringify(int) ?? int
}

function encodingLength(value) {
  if (typeof value === 'string') return encodingLength(parse(value))
  assert(value != null, 'Invalid AccountType value (' + value + ')')

  if (0 <= value && value <= 28) return 1

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
  ACCOUNT_TYPE_UNSPECIFIED,
  ACCOUNT_TYPE_INSURANCE,
  ACCOUNT_TYPE_SETTLEMENT,
  ACCOUNT_TYPE_MARGIN,
  ACCOUNT_TYPE_GENERAL,
  ACCOUNT_TYPE_FEES_INFRASTRUCTURE,
  ACCOUNT_TYPE_FEES_LIQUIDITY,
  ACCOUNT_TYPE_FEES_MAKER,
  ACCOUNT_TYPE_BOND,
  ACCOUNT_TYPE_EXTERNAL,
  ACCOUNT_TYPE_GLOBAL_INSURANCE,
  ACCOUNT_TYPE_GLOBAL_REWARD,
  ACCOUNT_TYPE_PENDING_TRANSFERS,
  ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES,
  ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES,
  ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES,
  ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS,
  ACCOUNT_TYPE_HOLDING,
  ACCOUNT_TYPE_LP_LIQUIDITY_FEES,
  ACCOUNT_TYPE_LIQUIDITY_FEES_BONUS_DISTRIBUTION,
  ACCOUNT_TYPE_NETWORK_TREASURY,
  ACCOUNT_TYPE_VESTING_REWARDS,
  ACCOUNT_TYPE_VESTED_REWARDS,
  ACCOUNT_TYPE_REWARD_AVERAGE_POSITION,
  ACCOUNT_TYPE_REWARD_RELATIVE_RETURN,
  ACCOUNT_TYPE_REWARD_RETURN_VOLATILITY,
  ACCOUNT_TYPE_REWARD_VALIDATOR_RANKING,
  ACCOUNT_TYPE_PENDING_FEE_REFERRAL_REWARD
}
