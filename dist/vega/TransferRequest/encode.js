/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_Account = require('./../Account/encode.js')
const _vega_TransferType = require('./../TransferType.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fromAccount?.length)
    obj.fromAccount.forEach((v) => writer.bytes(1, _vega_Account.encode(v)))
  if (obj.toAccount?.length)
    obj.toAccount.forEach((v) => writer.bytes(2, _vega_Account.encode(v)))
  if (obj.amount) writer.bytes(3, obj.amount, string)
  if (obj.minAmount) writer.bytes(4, obj.minAmount, string)
  if (obj.asset) writer.bytes(5, obj.asset, string)
  if (obj.type) writer.varint(7, obj.type, _vega_TransferType)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
