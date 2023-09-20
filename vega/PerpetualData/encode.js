/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fundingPayment) writer.bytes(1, obj.fundingPayment, string)
  if (obj.fundingRate) writer.bytes(2, obj.fundingRate, string)
  if (obj.internalTwap) writer.bytes(3, obj.internalTwap, string)
  if (obj.externalTwap) writer.bytes(4, obj.externalTwap, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }