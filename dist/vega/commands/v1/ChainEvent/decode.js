/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string, uint64 } from 'protobuf-codec/decode/types'
import * as _vega_BuiltinAssetEvent from './../../../BuiltinAssetEvent/decode.js'
import * as _vega_ERC20Event from './../../../ERC20Event/decode.js'
import * as _vega_StakingEvent from './../../../StakingEvent/decode.js'
import * as _vega_ERC20MultiSigEvent from './../../../ERC20MultiSigEvent/decode.js'
import * as _vega_EthContractCallEvent from './../../../EthContractCallEvent/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$txId = ''
  let field$nonce = 0n
  let field$event = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$txId = string(data)
        break

      case 2:
        field$nonce = uint64(data)
        break

      case 1001:
        field$event = { builtin: _vega_BuiltinAssetEvent.decode(data) }
        break

      case 1002:
        field$event = { erc20: _vega_ERC20Event.decode(data) }
        break

      case 1005:
        field$event = { stakingEvent: _vega_StakingEvent.decode(data) }
        break

      case 1006:
        field$event = { erc20Multisig: _vega_ERC20MultiSigEvent.decode(data) }
        break

      case 1007:
        field$event = { contractCall: _vega_EthContractCallEvent.decode(data) }
        break
    }
  }
  return { txId: field$txId, nonce: field$nonce, event: field$event }
}
