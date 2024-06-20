/// autogenerated by protoc-plugin-js
import type { Metadata } from './Metadata'

export * from './PartyProfile/encode.js'
export * from './PartyProfile/decode.js'

export type PartyProfile = {
  partyId: string
  alias: string
  metadata: Metadata[]
  derivedKeys: string[]
}
