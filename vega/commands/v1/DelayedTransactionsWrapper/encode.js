/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { bytes, uint64 } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.transactions?.length)
    obj.transactions.forEach((v) => writer.bytes(1, v, bytes))
  if (obj.height) writer.varint(2, obj.height, uint64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
