/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { uint64 } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.startEpoch) writer.varint(1, obj.startEpoch, uint64)
  if (obj.endEpoch) writer.varint(2, obj.endEpoch, uint64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
