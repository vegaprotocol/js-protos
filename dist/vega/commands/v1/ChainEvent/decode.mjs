import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64 } from "protobuf-codec/decode/types.mjs"
import * as BuiltinAssetEvent from "./../../../BuiltinAssetEvent/decode.mjs"
import * as ERC20Event from "./../../../ERC20Event/decode.mjs"
import * as StakingEvent from "./../../../StakingEvent/decode.mjs"
import * as ERC20MultiSigEvent from "./../../../ERC20MultiSigEvent/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let txId = {}
  let nonce = 0n
  let builtin = {}
  let erc20 = {}
  let stakingEvent = {}
  let erc20Multisig = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        txId = data
        break
      case 2:
        nonce = data
        break
      case 1001:
        builtin = data
        break
      case 1002:
        erc20 = data
        break
      case 1005:
        stakingEvent = data
        break
      case 1006:
        erc20Multisig = data
        break
    }
  }

  return {
    txId,
    nonce,
    builtin,
    erc20,
    stakingEvent,
    erc20Multisig,
  }
}
