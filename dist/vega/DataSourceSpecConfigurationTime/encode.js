/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_data_v1_Condition from './../data/v1/Condition/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.conditions?.length)
    obj.conditions.forEach((v) =>
      writer.bytes(1, _vega_data_v1_Condition.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }