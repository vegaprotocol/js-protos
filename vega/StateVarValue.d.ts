/// autogenerated by protoc-plugin-js
import type { ScalarValue } from './ScalarValue'
import type { VectorValue } from './VectorValue'
import type { MatrixValue } from './MatrixValue'

export * from './StateVarValue/encode.js'
export * from './StateVarValue/decode.js'

export type StateVarValue = {
  value:
    | { scalarVal: ScalarValue }
    | { vectorVal: VectorValue }
    | { matrixVal: MatrixValue }
    | null
}
