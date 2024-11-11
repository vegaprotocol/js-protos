/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, bool } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.teamId) writer.bytes(1, obj.teamId, string)
  if (obj.enableRewards) writer.varint(2, obj.enableRewards, bool)
  if (obj.name) writer.bytes(3, obj.name, string)
  if (obj.teamUrl) writer.bytes(4, obj.teamUrl, string)
  if (obj.avatarUrl) writer.bytes(5, obj.avatarUrl, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
