/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.makerFee) writer.bytes(1, obj.makerFee, string)
  if (obj.infrastructureFee) writer.bytes(2, obj.infrastructureFee, string)
  if (obj.liquidityFee) writer.bytes(3, obj.liquidityFee, string)
  if (obj.makerFeeVolumeDiscount)
    writer.bytes(4, obj.makerFeeVolumeDiscount, string)
  if (obj.infrastructureFeeVolumeDiscount)
    writer.bytes(5, obj.infrastructureFeeVolumeDiscount, string)
  if (obj.liquidityFeeVolumeDiscount)
    writer.bytes(6, obj.liquidityFeeVolumeDiscount, string)
  if (obj.makerFeeReferrerDiscount)
    writer.bytes(7, obj.makerFeeReferrerDiscount, string)
  if (obj.infrastructureFeeReferrerDiscount)
    writer.bytes(8, obj.infrastructureFeeReferrerDiscount, string)
  if (obj.liquidityFeeReferrerDiscount)
    writer.bytes(9, obj.liquidityFeeReferrerDiscount, string)
  if (obj.treasuryFee) writer.bytes(10, obj.treasuryFee, string)
  if (obj.buyBackFee) writer.bytes(11, obj.buyBackFee, string)
  if (obj.highVolumeMakerFee) writer.bytes(12, obj.highVolumeMakerFee, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
