/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, uint64, bytes, bool } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.specId) writer.bytes(1, obj.specId, string)
  if (obj.blockHeight) writer.varint(2, obj.blockHeight, uint64)
  if (obj.blockTime) writer.varint(3, obj.blockTime, uint64)
  if (obj.result) writer.bytes(4, obj.result, bytes)
  if (obj.error) writer.bytes(5, obj.error, string)
  if (obj.sourceChainId) writer.varint(6, obj.sourceChainId, uint64)
  if (obj.heartbeat) writer.varint(7, obj.heartbeat, bool)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
