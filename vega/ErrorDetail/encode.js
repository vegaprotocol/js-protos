/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { int32, string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.code) writer.varint(1, obj.code, int32)
  if (obj.message) writer.bytes(2, obj.message, string)
  if (obj.inner) writer.bytes(3, obj.inner, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
