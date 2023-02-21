/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as _vega_data_v1_Condition_Operator from './Operator.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.operator)
    writer.varint(1, obj.operator, _vega_data_v1_Condition_Operator)
  if (obj.value) writer.bytes(2, obj.value, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }