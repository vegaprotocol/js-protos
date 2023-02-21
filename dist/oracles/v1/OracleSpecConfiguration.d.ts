import { Filter } from './Filter'

export * from './OracleSpecConfiguration/encode'
export * from './OracleSpecConfiguration/decode'

export type OracleSpecConfiguration = {
  pubKeys: string[]
  filters: Filter[]
}
