import { Operator } from './Condition/Operator'

export * from './Condition/encode'
export * from './Condition/decode'
export * as Operator from './Condition/Operator'

export type Condition = {
  operator: Operator
  value: string
}
