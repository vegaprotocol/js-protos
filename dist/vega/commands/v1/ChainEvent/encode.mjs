import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64 } from "protobuf-codec/encode/types.mjs"
import * as BuiltinAssetEvent from "./../../../BuiltinAssetEvent/encode.mjs"
import * as ERC20Event from "./../../../ERC20Event/encode.mjs"
import * as StakingEvent from "./../../../StakingEvent/encode.mjs"
import * as ERC20MultiSigEvent from "./../../../ERC20MultiSigEvent/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.txId) writer.bytes(1, obj.txId, string)
  if (obj.nonce) writer.varint(2, obj.nonce, uint64)

  if (obj.event) {
    const _o = obj.event
    if (_o.builtin) writer.bytes(1001, BuiltinAssetEvent.encode(_o.builtin))
    if (_o.erc20) writer.bytes(1002, ERC20Event.encode(_o.erc20))
    if (_o.stakingEvent)
      writer.bytes(1005, StakingEvent.encode(_o.stakingEvent))
    if (_o.erc20Multisig)
      writer.bytes(1006, ERC20MultiSigEvent.encode(_o.erc20Multisig))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
