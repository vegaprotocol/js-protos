/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_ProposalTerms = require('./../../../ProposalTerms/encode.js')
const _vega_ProposalRationale = require('./../../../ProposalRationale/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.reference) writer.bytes(1, obj.reference, string)
  if (obj.terms) writer.bytes(2, _vega_ProposalTerms.encode(obj.terms))
  if (obj.rationale)
    writer.bytes(3, _vega_ProposalRationale.encode(obj.rationale))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }