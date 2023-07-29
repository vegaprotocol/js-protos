/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, int64 } = require('protobuf-codec/decode/types')
const _vega_Withdrawal_Status = require('./Status.js')
const _vega_WithdrawExt = require('./../WithdrawExt/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$id = ''
  let field$partyId = ''
  let field$amount = ''
  let field$asset = ''
  let field$status = 0
  let field$ref = ''
  let field$txHash = ''
  let field$createdTimestamp = 0n
  let field$withdrawnTimestamp = 0n
  let field$ext = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$partyId = string(data)
        break

      case 3:
        field$amount = string(data)
        break

      case 4:
        field$asset = string(data)
        break

      case 5:
        field$status = _vega_Withdrawal_Status.decode(data)
        break

      case 6:
        field$ref = string(data)
        break

      case 8:
        field$txHash = string(data)
        break

      case 9:
        field$createdTimestamp = int64(data)
        break

      case 10:
        field$withdrawnTimestamp = int64(data)
        break

      case 11:
        field$ext = _vega_WithdrawExt.decode(data)
        break
    }
  }
  return {
    id: field$id,
    partyId: field$partyId,
    amount: field$amount,
    asset: field$asset,
    status: field$status,
    ref: field$ref,
    txHash: field$txHash,
    createdTimestamp: field$createdTimestamp,
    withdrawnTimestamp: field$withdrawnTimestamp,
    ext: field$ext
  }
}
