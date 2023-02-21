import { Filter } from './Filter'
import { Status } from './OracleSpec/Status'

export * from './OracleSpec/encode'
export * from './OracleSpec/decode'
export * as Status from './OracleSpec/Status'

export type OracleSpec = {
  id: string
  createdAt: bigint
  updatedAt: bigint
  pubKeys: string[]
  filters: Filter[]
  status: Status
}
