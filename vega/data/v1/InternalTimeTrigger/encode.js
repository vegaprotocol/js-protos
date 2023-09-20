/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { int64 } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.initial) writer.varint(1, obj.initial, int64)
  if (obj.every) writer.varint(2, obj.every, int64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }