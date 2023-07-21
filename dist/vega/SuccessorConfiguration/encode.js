/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.parentMarketId) writer.bytes(1, obj.parentMarketId, string)
  if (obj.insurancePoolFraction)
    writer.bytes(2, obj.insurancePoolFraction, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
