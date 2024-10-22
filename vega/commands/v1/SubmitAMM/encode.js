/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_commands_v1_SubmitAMM_ConcentratedLiquidityParameters = require('./ConcentratedLiquidityParameters/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.marketId) writer.bytes(1, obj.marketId, string)
  if (obj.commitmentAmount) writer.bytes(2, obj.commitmentAmount, string)
  if (obj.slippageTolerance) writer.bytes(3, obj.slippageTolerance, string)
  if (obj.concentratedLiquidityParameters)
    writer.bytes(
      4,
      _vega_commands_v1_SubmitAMM_ConcentratedLiquidityParameters.encode(
        obj.concentratedLiquidityParameters
      )
    )
  if (obj.proposedFee) writer.bytes(5, obj.proposedFee, string)
  if (obj.minimumPriceChangeTrigger)
    writer.bytes(7, obj.minimumPriceChangeTrigger, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
