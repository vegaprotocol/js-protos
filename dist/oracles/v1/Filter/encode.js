import Writer from 'protobuf-codec/encode/writer'

import * as PropertyKey from './../PropertyKey/encode.js'
import * as Condition from './../Condition/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.key) writer.bytes(1, PropertyKey.encode(obj.key))
  if (obj.conditions?.length)
    obj.conditions.forEach((v) => writer.bytes(2, Condition.encode(v)))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
