/// autogenerated by protoc-plugin-js
import type { AssetDetails } from './AssetDetails'
import type { Status } from './Asset/Status'

export * from './Asset/encode.js'
export * from './Asset/decode.js'
export * as Status from './Asset/Status.js'

export type Asset = {
  id: string
  details: AssetDetails
  status: Status
}