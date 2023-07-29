/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_commands_v1_Signature = require('./../Signature/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.nodeId) writer.bytes(1, obj.nodeId, string)
  if (obj.ethereumSignature)
    writer.bytes(2, _vega_commands_v1_Signature.encode(obj.ethereumSignature))
  if (obj.vegaSignature)
    writer.bytes(3, _vega_commands_v1_Signature.encode(obj.vegaSignature))
  if (obj.message) writer.bytes(4, obj.message, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
