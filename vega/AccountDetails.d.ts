/// autogenerated by protoc-plugin-js
import type { AccountType } from './AccountType'

export * from './AccountDetails/encode.js'
export * from './AccountDetails/decode.js'

export type AccountDetails = {
  assetId: string
  type: AccountType
  owner: string | null
  marketId: string | null
}
