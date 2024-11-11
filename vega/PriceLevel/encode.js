/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, uint64 } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.price) writer.bytes(1, obj.price, string)
  if (obj.numberOfOrders) writer.varint(2, obj.numberOfOrders, uint64)
  if (obj.volume) writer.varint(3, obj.volume, uint64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
