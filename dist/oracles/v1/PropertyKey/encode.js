import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as Type from './Type.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.name) writer.bytes(1, obj.name, string)
  if (obj.type) writer.varint(2, obj.type, Type)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
