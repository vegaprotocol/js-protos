/// autogenerated by protoc-plugin-js
import type { EthereumContractConfig } from './EthereumContractConfig'

export * from './EthereumConfig/encode.js'
export * from './EthereumConfig/decode.js'

export type EthereumConfig = {
  networkId: string
  chainId: string
  collateralBridgeContract: EthereumContractConfig
  confirmations: number
  stakingBridgeContract: EthereumContractConfig
  tokenVestingContract: EthereumContractConfig
  multisigControlContract: EthereumContractConfig
}
