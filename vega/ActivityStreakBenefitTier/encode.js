/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { uint64, string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.minimumActivityStreak)
    writer.varint(1, obj.minimumActivityStreak, uint64)
  if (obj.rewardMultiplier) writer.bytes(2, obj.rewardMultiplier, string)
  if (obj.vestingMultiplier) writer.bytes(3, obj.vestingMultiplier, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
