/// autogenerated by protoc-plugin-js
import type { PositionStatus } from './PositionStatus'

export * from './Position/encode.js'
export * from './Position/decode.js'

export type Position = {
  marketId: string
  partyId: string
  openVolume: bigint
  realisedPnl: string
  unrealisedPnl: string
  averageEntryPrice: string
  updatedAt: bigint
  lossSocialisationAmount: string
  positionStatus: PositionStatus
}
