/// autogenerated by protoc-plugin-js
import type { PubKey } from './PubKey'
import type { ETHAddress } from './ETHAddress'

export * from './Signer/encode.js'
export * from './Signer/decode.js'

export type Signer = {
  signer: { pubKey: PubKey } | { ethAddress: ETHAddress } | null
}
