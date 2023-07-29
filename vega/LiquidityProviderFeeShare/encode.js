/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.party) writer.bytes(1, obj.party, string)
  if (obj.equityLikeShare) writer.bytes(2, obj.equityLikeShare, string)
  if (obj.averageEntryValuation)
    writer.bytes(3, obj.averageEntryValuation, string)
  if (obj.averageScore) writer.bytes(4, obj.averageScore, string)
  if (obj.virtualStake) writer.bytes(5, obj.virtualStake, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }