/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.vegaAssetId) writer.bytes(1, obj.vegaAssetId, string)
  if (obj.sourceEthereumAddress)
    writer.bytes(2, obj.sourceEthereumAddress, string)
  if (obj.targetPartyId) writer.bytes(3, obj.targetPartyId, string)
  if (obj.amount) writer.bytes(4, obj.amount, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
