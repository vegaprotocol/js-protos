/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as _vega_AccountType from './../AccountType.js'
import * as _vega_GovernanceTransferType from './../GovernanceTransferType.js'
import * as _vega_OneOffTransfer from './../OneOffTransfer/encode.js'
import * as _vega_RecurringTransfer from './../RecurringTransfer/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.sourceType) writer.varint(1, obj.sourceType, _vega_AccountType)
  if (obj.source) writer.bytes(2, obj.source, string)
  if (obj.transferType)
    writer.varint(3, obj.transferType, _vega_GovernanceTransferType)
  if (obj.amount) writer.bytes(4, obj.amount, string)
  if (obj.asset) writer.bytes(5, obj.asset, string)
  if (obj.fractionOfBalance) writer.bytes(6, obj.fractionOfBalance, string)
  if (obj.destinationType)
    writer.varint(7, obj.destinationType, _vega_AccountType)
  if (obj.destination) writer.bytes(8, obj.destination, string)

  if (obj.kind?.oneOff ?? obj.oneOff)
    writer.bytes(
      101,
      _vega_OneOffTransfer.encode(obj.kind?.oneOff ?? obj.oneOff)
    )
  if (obj.kind?.recurring ?? obj.recurring)
    writer.bytes(
      102,
      _vega_RecurringTransfer.encode(obj.kind?.recurring ?? obj.recurring)
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
