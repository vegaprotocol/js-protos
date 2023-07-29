/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.tags?.length) obj.tags.forEach((v) => writer.bytes(1, v, string))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
