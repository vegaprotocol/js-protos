/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { uint32, string } from 'protobuf-codec/encode/types'
import * as _vega_PeggedReference from './../PeggedReference.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.reference) writer.varint(1, obj.reference, _vega_PeggedReference)
  if (obj.proportion) writer.varint(2, obj.proportion, uint32)
  if (obj.offset) writer.bytes(3, obj.offset, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }