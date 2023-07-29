/// autogenerated by protoc-plugin-js
import type { FinancialAmount } from './FinancialAmount'
import type { TransferType } from './TransferType'

export * from './Transfer/encode.js'
export * from './Transfer/decode.js'

export type Transfer = {
  owner: string
  amount: FinancialAmount
  type: TransferType
  minAmount: string
  marketId: string
}