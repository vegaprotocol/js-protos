/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_AccountType = require('./../../../AccountType.js')
const _vega_commands_v1_OneOffTransfer = require('./../OneOffTransfer/encode.js')
const _vega_commands_v1_RecurringTransfer = require('./../RecurringTransfer/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fromAccountType)
    writer.varint(1, obj.fromAccountType, _vega_AccountType)
  if (obj.to) writer.bytes(2, obj.to, string)
  if (obj.toAccountType) writer.varint(3, obj.toAccountType, _vega_AccountType)
  if (obj.asset) writer.bytes(4, obj.asset, string)
  if (obj.amount) writer.bytes(5, obj.amount, string)
  if (obj.reference) writer.bytes(6, obj.reference, string)
  if (obj.from) writer.bytes(7, obj.from, string)

  if (obj.kind?.oneOff ?? obj.oneOff)
    writer.bytes(
      101,
      _vega_commands_v1_OneOffTransfer.encode(obj.kind?.oneOff ?? obj.oneOff)
    )
  if (obj.kind?.recurring ?? obj.recurring)
    writer.bytes(
      102,
      _vega_commands_v1_RecurringTransfer.encode(
        obj.kind?.recurring ?? obj.recurring
      )
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
