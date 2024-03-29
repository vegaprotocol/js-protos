/// autogenerated by protoc-plugin-js
import type { NullValue } from './NullValue'
import type { Struct } from './Struct'
import type { ListValue } from './ListValue'

export * from './Value/encode.js'
export * from './Value/decode.js'

export type Value = {
  kind:
    | { nullValue: NullValue }
    | { numberValue: number }
    | { stringValue: string }
    | { boolValue: boolean }
    | { structValue: Struct }
    | { listValue: ListValue }
    | null
}
