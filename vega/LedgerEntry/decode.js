/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, int64 } = require('protobuf-codec/decode/types')
const _vega_AccountDetails = require('./../AccountDetails/decode.js')
const _vega_TransferType = require('./../TransferType.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$fromAccount = {}
  let field$toAccount = {}
  let field$amount = ''
  let field$type = 0
  let field$timestamp = 0n
  let field$fromAccountBalance = ''
  let field$toAccountBalance = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$fromAccount = _vega_AccountDetails.decode(data)
        break

      case 2:
        field$toAccount = _vega_AccountDetails.decode(data)
        break

      case 3:
        field$amount = string(data)
        break

      case 4:
        field$type = _vega_TransferType.decode(data)
        break

      case 5:
        field$timestamp = int64(data)
        break

      case 6:
        field$fromAccountBalance = string(data)
        break

      case 7:
        field$toAccountBalance = string(data)
        break
    }
  }
  return {
    fromAccount: field$fromAccount,
    toAccount: field$toAccount,
    amount: field$amount,
    type: field$type,
    timestamp: field$timestamp,
    fromAccountBalance: field$fromAccountBalance,
    toAccountBalance: field$toAccountBalance
  }
}