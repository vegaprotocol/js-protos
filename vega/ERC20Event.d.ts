/// autogenerated by protoc-plugin-js
import type { ERC20AssetList } from './ERC20AssetList'
import type { ERC20AssetDelist } from './ERC20AssetDelist'
import type { ERC20Deposit } from './ERC20Deposit'
import type { ERC20Withdrawal } from './ERC20Withdrawal'
import type { ERC20AssetLimitsUpdated } from './ERC20AssetLimitsUpdated'

export * from './ERC20Event/encode.js'
export * from './ERC20Event/decode.js'

export type ERC20Event = {
  index: bigint
  block: bigint
  chainId: string
  action:
    | { assetList: ERC20AssetList }
    | { assetDelist: ERC20AssetDelist }
    | { deposit: ERC20Deposit }
    | { withdrawal: ERC20Withdrawal }
    | { assetLimitsUpdated: ERC20AssetLimitsUpdated }
    | { bridgeStopped: boolean }
    | { bridgeResumed: boolean }
    | null
}
