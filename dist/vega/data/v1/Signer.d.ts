/// autogenerated by protoc-plugin-js
import type { PubKey } from './PubKey'
import type { ETHAddress } from './ETHAddress'

export * from './Signer/encode.js'
export * from './Signer/decode.js'

export type OneofSigner =
  | { signer: { pubKey: PubKey } | { ethAddress: ETHAddress } | null }
  | { pubKey?: PubKey }
  | { ethAddress?: ETHAddress }
export type Signer = {} & OneofSigner
