/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { int64 } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.deliverOn) writer.varint(1, obj.deliverOn, int64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }