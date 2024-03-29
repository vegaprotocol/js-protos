/// autogenerated by protoc-plugin-js
import type { CompositePriceType } from './CompositePriceType'
import type { DataSourceDefinition } from './DataSourceDefinition'
import type { SpecBindingForCompositePrice } from './SpecBindingForCompositePrice'

export * from './CompositePriceConfiguration/encode.js'
export * from './CompositePriceConfiguration/decode.js'

export type CompositePriceConfiguration = {
  decayWeight: string
  decayPower: bigint
  cashAmount: string
  sourceWeights: string[]
  sourceStalenessTolerance: string[]
  compositePriceType: CompositePriceType
  dataSourcesSpec: DataSourceDefinition[]
  dataSourcesSpecBinding: SpecBindingForCompositePrice[]
}
