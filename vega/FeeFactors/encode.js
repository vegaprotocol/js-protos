/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.makerFee) writer.bytes(1, obj.makerFee, string)
  if (obj.infrastructureFee) writer.bytes(2, obj.infrastructureFee, string)
  if (obj.liquidityFee) writer.bytes(3, obj.liquidityFee, string)
  if (obj.treasuryFee) writer.bytes(4, obj.treasuryFee, string)
  if (obj.buyBackFee) writer.bytes(5, obj.buyBackFee, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
