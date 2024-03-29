/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { uint32, string } = require('protobuf-codec/encode/types')
const _vega_PeggedReference = require('./../PeggedReference.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.reference) writer.varint(1, obj.reference, _vega_PeggedReference)
  if (obj.proportion) writer.varint(2, obj.proportion, uint32)
  if (obj.offset) writer.bytes(3, obj.offset, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
