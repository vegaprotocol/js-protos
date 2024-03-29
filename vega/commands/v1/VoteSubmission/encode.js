/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_Vote_Value = require('./../../../Vote/Value.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.proposalId) writer.bytes(1, obj.proposalId, string)
  if (obj.value) writer.varint(2, obj.value, _vega_Vote_Value)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
