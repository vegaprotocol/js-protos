/// autogenerated by protoc-plugin-js
import type { BuiltinAssetEvent } from './../../BuiltinAssetEvent'
import type { ERC20Event } from './../../ERC20Event'
import type { StakingEvent } from './../../StakingEvent'
import type { ERC20MultiSigEvent } from './../../ERC20MultiSigEvent'
import type { EthContractCallEvent } from './../../EthContractCallEvent'

export * from './ChainEvent/encode.js'
export * from './ChainEvent/decode.js'

export type ChainEvent = {
  txId: string
  nonce: bigint
  event:
    | { builtin: BuiltinAssetEvent }
    | { erc20: ERC20Event }
    | { stakingEvent: StakingEvent }
    | { erc20Multisig: ERC20MultiSigEvent }
    | { contractCall: EthContractCallEvent }
    | null
}
