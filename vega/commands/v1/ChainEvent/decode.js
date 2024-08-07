/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64 } = require('protobuf-codec/decode/types')
const _vega_BuiltinAssetEvent = require('./../../../BuiltinAssetEvent/decode.js')
const _vega_ERC20Event = require('./../../../ERC20Event/decode.js')
const _vega_StakingEvent = require('./../../../StakingEvent/decode.js')
const _vega_ERC20MultiSigEvent = require('./../../../ERC20MultiSigEvent/decode.js')
const _vega_EthContractCallEvent = require('./../../../EthContractCallEvent/decode.js')
const _vega_ERC20Heartbeat = require('./../../../ERC20Heartbeat/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
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

      case 1008:
        field$event = { heartbeat: _vega_ERC20Heartbeat.decode(data) }
        break
    }
  }
  return { txId: field$txId, nonce: field$nonce, event: field$event }
}
