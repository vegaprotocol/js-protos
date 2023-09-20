/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.minimumRunningNotionalTakerVolume)
    writer.bytes(1, obj.minimumRunningNotionalTakerVolume, string)
  if (obj.minimumEpochs) writer.bytes(2, obj.minimumEpochs, string)
  if (obj.referralRewardFactor)
    writer.bytes(3, obj.referralRewardFactor, string)
  if (obj.referralDiscountFactor)
    writer.bytes(4, obj.referralDiscountFactor, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }