/// autogenerated by protoc-plugin-js

export * from './EthContractCallEvent/encode.js'
export * from './EthContractCallEvent/decode.js'

export type EthContractCallEvent = {
  specId: string
  blockHeight: bigint
  blockTime: bigint
  result: Uint8Array
}