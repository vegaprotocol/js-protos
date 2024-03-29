/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { int64, uint64 } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.startTime) writer.varint(1, obj.startTime, int64)
  if (obj.expiryTime) writer.varint(2, obj.expiryTime, int64)
  if (obj.endTime) writer.varint(3, obj.endTime, int64)
  if (obj.firstBlock) writer.varint(4, obj.firstBlock, uint64)
  if (obj.lastBlock) writer.varint(5, obj.lastBlock, uint64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
