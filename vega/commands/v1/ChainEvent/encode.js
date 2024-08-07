/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, uint64 } = require('protobuf-codec/encode/types')
const _vega_BuiltinAssetEvent = require('./../../../BuiltinAssetEvent/encode.js')
const _vega_ERC20Event = require('./../../../ERC20Event/encode.js')
const _vega_StakingEvent = require('./../../../StakingEvent/encode.js')
const _vega_ERC20MultiSigEvent = require('./../../../ERC20MultiSigEvent/encode.js')
const _vega_EthContractCallEvent = require('./../../../EthContractCallEvent/encode.js')
const _vega_ERC20Heartbeat = require('./../../../ERC20Heartbeat/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.txId) writer.bytes(1, obj.txId, string)
  if (obj.nonce) writer.varint(2, obj.nonce, uint64)

  if (obj.event?.builtin ?? obj.builtin)
    writer.bytes(
      1001,
      _vega_BuiltinAssetEvent.encode(obj.event?.builtin ?? obj.builtin)
    )
  if (obj.event?.erc20 ?? obj.erc20)
    writer.bytes(1002, _vega_ERC20Event.encode(obj.event?.erc20 ?? obj.erc20))
  if (obj.event?.stakingEvent ?? obj.stakingEvent)
    writer.bytes(
      1005,
      _vega_StakingEvent.encode(obj.event?.stakingEvent ?? obj.stakingEvent)
    )
  if (obj.event?.erc20Multisig ?? obj.erc20Multisig)
    writer.bytes(
      1006,
      _vega_ERC20MultiSigEvent.encode(
        obj.event?.erc20Multisig ?? obj.erc20Multisig
      )
    )
  if (obj.event?.contractCall ?? obj.contractCall)
    writer.bytes(
      1007,
      _vega_EthContractCallEvent.encode(
        obj.event?.contractCall ?? obj.contractCall
      )
    )
  if (obj.event?.heartbeat ?? obj.heartbeat)
    writer.bytes(
      1008,
      _vega_ERC20Heartbeat.encode(obj.event?.heartbeat ?? obj.heartbeat)
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
