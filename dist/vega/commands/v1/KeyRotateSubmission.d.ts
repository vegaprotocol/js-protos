/// autogenerated by protoc-plugin-js

export * from './KeyRotateSubmission/encode.js'
export * from './KeyRotateSubmission/decode.js'

export type KeyRotateSubmission = {
  newPubKeyIndex: number
  targetBlock: bigint
  newPubKey: string
  currentPubKeyHash: string
}