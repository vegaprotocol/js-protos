/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, bool } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.doNotJoinTeam) writer.varint(2, obj.doNotJoinTeam, bool)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
