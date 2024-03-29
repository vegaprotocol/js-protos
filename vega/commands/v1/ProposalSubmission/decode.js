/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_ProposalTerms = require('./../../../ProposalTerms/decode.js')
const _vega_ProposalRationale = require('./../../../ProposalRationale/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$reference = ''
  let field$terms = {}
  let field$rationale = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$reference = string(data)
        break

      case 2:
        field$terms = _vega_ProposalTerms.decode(data)
        break

      case 3:
        field$rationale = _vega_ProposalRationale.decode(data)
        break
    }
  }
  return {
    reference: field$reference,
    terms: field$terms,
    rationale: field$rationale
  }
}
