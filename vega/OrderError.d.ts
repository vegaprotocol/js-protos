/// autogenerated by protoc-plugin-js
import type { LiteralUnion } from 'type-fest'

export const ORDER_ERROR_UNSPECIFIED = 0
export const ORDER_ERROR_INVALID_MARKET_ID = 1
export const ORDER_ERROR_INVALID_ORDER_ID = 2
export const ORDER_ERROR_OUT_OF_SEQUENCE = 3
export const ORDER_ERROR_INVALID_REMAINING_SIZE = 4
export const ORDER_ERROR_TIME_FAILURE = 5
export const ORDER_ERROR_REMOVAL_FAILURE = 6
export const ORDER_ERROR_INVALID_EXPIRATION_DATETIME = 7
export const ORDER_ERROR_INVALID_ORDER_REFERENCE = 8
export const ORDER_ERROR_EDIT_NOT_ALLOWED = 9
export const ORDER_ERROR_AMEND_FAILURE = 10
export const ORDER_ERROR_NOT_FOUND = 11
export const ORDER_ERROR_INVALID_PARTY_ID = 12
export const ORDER_ERROR_MARKET_CLOSED = 13
export const ORDER_ERROR_MARGIN_CHECK_FAILED = 14
export const ORDER_ERROR_MISSING_GENERAL_ACCOUNT = 15
export const ORDER_ERROR_INTERNAL_ERROR = 16
export const ORDER_ERROR_INVALID_SIZE = 17
export const ORDER_ERROR_INVALID_PERSISTENCE = 18
export const ORDER_ERROR_INVALID_TYPE = 19
export const ORDER_ERROR_SELF_TRADING = 20
export const ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES = 21
export const ORDER_ERROR_INCORRECT_MARKET_TYPE = 22
export const ORDER_ERROR_INVALID_TIME_IN_FORCE = 23
export const ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION = 24
export const ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING = 25
export const ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT = 26
export const ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT = 27
export const ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT = 28
export const ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC = 29
export const ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN = 30
export const ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN = 31
export const ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION = 32
export const ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION = 33
export const ORDER_ERROR_MUST_BE_LIMIT_ORDER = 34
export const ORDER_ERROR_MUST_BE_GTT_OR_GTC = 35
export const ORDER_ERROR_WITHOUT_REFERENCE_PRICE = 36
export const ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE = 37
export const ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO = 40
export const ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE = 41
export const ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO = 42
export const ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE = 43
export const ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER = 44
export const ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER = 45
export const ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER = 46
export const ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS = 47
export const ORDER_ERROR_TOO_MANY_PEGGED_ORDERS = 48
export const ORDER_ERROR_POST_ONLY_ORDER_WOULD_TRADE = 49
export const ORDER_ERROR_REDUCE_ONLY_ORDER_WOULD_NOT_REDUCE_POSITION = 50
export const ORDER_ERROR_ISOLATED_MARGIN_CHECK_FAILED = 51
export const ORDER_ERROR_PEGGED_ORDERS_NOT_ALLOWED_IN_ISOLATED_MARGIN_MODE = 52
export const ORDER_ERROR_PRICE_NOT_IN_TICK_SIZE = 53

export type Values =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
export type Names =
  | 'ORDER_ERROR_UNSPECIFIED'
  | 'ORDER_ERROR_INVALID_MARKET_ID'
  | 'ORDER_ERROR_INVALID_ORDER_ID'
  | 'ORDER_ERROR_OUT_OF_SEQUENCE'
  | 'ORDER_ERROR_INVALID_REMAINING_SIZE'
  | 'ORDER_ERROR_TIME_FAILURE'
  | 'ORDER_ERROR_REMOVAL_FAILURE'
  | 'ORDER_ERROR_INVALID_EXPIRATION_DATETIME'
  | 'ORDER_ERROR_INVALID_ORDER_REFERENCE'
  | 'ORDER_ERROR_EDIT_NOT_ALLOWED'
  | 'ORDER_ERROR_AMEND_FAILURE'
  | 'ORDER_ERROR_NOT_FOUND'
  | 'ORDER_ERROR_INVALID_PARTY_ID'
  | 'ORDER_ERROR_MARKET_CLOSED'
  | 'ORDER_ERROR_MARGIN_CHECK_FAILED'
  | 'ORDER_ERROR_MISSING_GENERAL_ACCOUNT'
  | 'ORDER_ERROR_INTERNAL_ERROR'
  | 'ORDER_ERROR_INVALID_SIZE'
  | 'ORDER_ERROR_INVALID_PERSISTENCE'
  | 'ORDER_ERROR_INVALID_TYPE'
  | 'ORDER_ERROR_SELF_TRADING'
  | 'ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES'
  | 'ORDER_ERROR_INCORRECT_MARKET_TYPE'
  | 'ORDER_ERROR_INVALID_TIME_IN_FORCE'
  | 'ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION'
  | 'ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING'
  | 'ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT'
  | 'ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT'
  | 'ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT'
  | 'ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC'
  | 'ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN'
  | 'ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN'
  | 'ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION'
  | 'ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION'
  | 'ORDER_ERROR_MUST_BE_LIMIT_ORDER'
  | 'ORDER_ERROR_MUST_BE_GTT_OR_GTC'
  | 'ORDER_ERROR_WITHOUT_REFERENCE_PRICE'
  | 'ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE'
  | 'ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO'
  | 'ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE'
  | 'ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO'
  | 'ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE'
  | 'ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER'
  | 'ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER'
  | 'ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER'
  | 'ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS'
  | 'ORDER_ERROR_TOO_MANY_PEGGED_ORDERS'
  | 'ORDER_ERROR_POST_ONLY_ORDER_WOULD_TRADE'
  | 'ORDER_ERROR_REDUCE_ONLY_ORDER_WOULD_NOT_REDUCE_POSITION'
  | 'ORDER_ERROR_ISOLATED_MARGIN_CHECK_FAILED'
  | 'ORDER_ERROR_PEGGED_ORDERS_NOT_ALLOWED_IN_ISOLATED_MARGIN_MODE'
  | 'ORDER_ERROR_PRICE_NOT_IN_TICK_SIZE'

export const enum OrderError {
  ORDER_ERROR_UNSPECIFIED = 0,
  ORDER_ERROR_INVALID_MARKET_ID = 1,
  ORDER_ERROR_INVALID_ORDER_ID = 2,
  ORDER_ERROR_OUT_OF_SEQUENCE = 3,
  ORDER_ERROR_INVALID_REMAINING_SIZE = 4,
  ORDER_ERROR_TIME_FAILURE = 5,
  ORDER_ERROR_REMOVAL_FAILURE = 6,
  ORDER_ERROR_INVALID_EXPIRATION_DATETIME = 7,
  ORDER_ERROR_INVALID_ORDER_REFERENCE = 8,
  ORDER_ERROR_EDIT_NOT_ALLOWED = 9,
  ORDER_ERROR_AMEND_FAILURE = 10,
  ORDER_ERROR_NOT_FOUND = 11,
  ORDER_ERROR_INVALID_PARTY_ID = 12,
  ORDER_ERROR_MARKET_CLOSED = 13,
  ORDER_ERROR_MARGIN_CHECK_FAILED = 14,
  ORDER_ERROR_MISSING_GENERAL_ACCOUNT = 15,
  ORDER_ERROR_INTERNAL_ERROR = 16,
  ORDER_ERROR_INVALID_SIZE = 17,
  ORDER_ERROR_INVALID_PERSISTENCE = 18,
  ORDER_ERROR_INVALID_TYPE = 19,
  ORDER_ERROR_SELF_TRADING = 20,
  ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES = 21,
  ORDER_ERROR_INCORRECT_MARKET_TYPE = 22,
  ORDER_ERROR_INVALID_TIME_IN_FORCE = 23,
  ORDER_ERROR_CANNOT_SEND_GFN_ORDER_DURING_AN_AUCTION = 24,
  ORDER_ERROR_CANNOT_SEND_GFA_ORDER_DURING_CONTINUOUS_TRADING = 25,
  ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT = 26,
  ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT = 27,
  ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT = 28,
  ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC = 29,
  ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN = 30,
  ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN = 31,
  ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION = 32,
  ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION = 33,
  ORDER_ERROR_MUST_BE_LIMIT_ORDER = 34,
  ORDER_ERROR_MUST_BE_GTT_OR_GTC = 35,
  ORDER_ERROR_WITHOUT_REFERENCE_PRICE = 36,
  ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE = 37,
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO = 40,
  ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE = 41,
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO = 42,
  ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE = 43,
  ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER = 44,
  ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER = 45,
  ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER = 46,
  ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS = 47,
  ORDER_ERROR_TOO_MANY_PEGGED_ORDERS = 48,
  ORDER_ERROR_POST_ONLY_ORDER_WOULD_TRADE = 49,
  ORDER_ERROR_REDUCE_ONLY_ORDER_WOULD_NOT_REDUCE_POSITION = 50,
  ORDER_ERROR_ISOLATED_MARGIN_CHECK_FAILED = 51,
  ORDER_ERROR_PEGGED_ORDERS_NOT_ALLOWED_IN_ISOLATED_MARGIN_MODE = 52,
  ORDER_ERROR_PRICE_NOT_IN_TICK_SIZE = 53
}

declare const enumValues: Map<Names, Values>
declare const enumNames: Map<Values, Names>

export function encode(
  value: Values | Names,
  buf: Uint8Array,
  byteOffset: number
): Uint8Array

export function decode(varint: bigint): LiteralUnion<Names, number>

export function encodingLength(value: LiteralUnion<Values, number>): number

export function stringify(int: Values): LiteralUnion<Names, undefined>

export function parse(str: Names): LiteralUnion<Values, undefined>
