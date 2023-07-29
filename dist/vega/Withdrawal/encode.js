/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, int64 } = require('protobuf-codec/encode/types')
const _vega_Withdrawal_Status = require('./Status.js')
const _vega_WithdrawExt = require('./../WithdrawExt/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.partyId) writer.bytes(2, obj.partyId, string)
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.asset) writer.bytes(4, obj.asset, string)
  if (obj.status) writer.varint(5, obj.status, _vega_Withdrawal_Status)
  if (obj.ref) writer.bytes(6, obj.ref, string)
  if (obj.txHash) writer.bytes(8, obj.txHash, string)
  if (obj.createdTimestamp) writer.varint(9, obj.createdTimestamp, int64)
  if (obj.withdrawnTimestamp) writer.varint(10, obj.withdrawnTimestamp, int64)
  if (obj.ext) writer.bytes(11, _vega_WithdrawExt.encode(obj.ext))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
