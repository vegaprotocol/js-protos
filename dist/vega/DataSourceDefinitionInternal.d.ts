/// autogenerated by protoc-plugin-js
import type { DataSourceSpecConfigurationTime } from './DataSourceSpecConfigurationTime'

export * from './DataSourceDefinitionInternal/encode.js'
export * from './DataSourceDefinitionInternal/decode.js'

export type OneofSource_type =
  | { source_type: { time: DataSourceSpecConfigurationTime } | null }
  | { time?: DataSourceSpecConfigurationTime }
export type DataSourceDefinitionInternal = {} & OneofSource_type
