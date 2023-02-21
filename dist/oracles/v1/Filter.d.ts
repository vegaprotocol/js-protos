import { PropertyKey } from './PropertyKey'
import { Condition } from './Condition'

export * from './Filter/encode'
export * from './Filter/decode'

export type Filter = {
  key: PropertyKey
  conditions: Condition[]
}
