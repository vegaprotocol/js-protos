/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as _vega_AccountType from './../../../AccountType.js'
import * as _vega_commands_v1_OneOffTransfer from './../OneOffTransfer/decode.js'
import * as _vega_commands_v1_RecurringTransfer from './../RecurringTransfer/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$fromAccountType = 0
  let field$to = ''
  let field$toAccountType = 0
  let field$asset = ''
  let field$amount = ''
  let field$reference = ''
  let field$kind = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$fromAccountType = _vega_AccountType.decode(data)
        break

      case 2:
        field$to = string(data)
        break

      case 3:
        field$toAccountType = _vega_AccountType.decode(data)
        break

      case 4:
        field$asset = string(data)
        break

      case 5:
        field$amount = string(data)
        break

      case 6:
        field$reference = string(data)
        break

      case 101:
        field$kind = { oneOff: _vega_commands_v1_OneOffTransfer.decode(data) }
        break

      case 102:
        field$kind = {
          recurring: _vega_commands_v1_RecurringTransfer.decode(data)
        }
        break
    }
  }
  return {
    fromAccountType: field$fromAccountType,
    to: field$to,
    toAccountType: field$toAccountType,
    asset: field$asset,
    amount: field$amount,
    reference: field$reference,
    kind: field$kind
  }
}