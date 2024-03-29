/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, int64 } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.newSigner) writer.bytes(1, obj.newSigner, string)
  if (obj.nonce) writer.bytes(2, obj.nonce, string)
  if (obj.blockTime) writer.varint(3, obj.blockTime, int64)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
