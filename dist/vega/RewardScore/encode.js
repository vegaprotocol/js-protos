/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_ValidatorNodeStatus = require('./../ValidatorNodeStatus.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.rawValidatorScore) writer.bytes(1, obj.rawValidatorScore, string)
  if (obj.performanceScore) writer.bytes(2, obj.performanceScore, string)
  if (obj.multisigScore) writer.bytes(3, obj.multisigScore, string)
  if (obj.validatorScore) writer.bytes(4, obj.validatorScore, string)
  if (obj.normalisedScore) writer.bytes(5, obj.normalisedScore, string)
  if (obj.validatorStatus)
    writer.varint(6, obj.validatorStatus, _vega_ValidatorNodeStatus)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
