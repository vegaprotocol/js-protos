/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, int64 } = require('protobuf-codec/encode/types')
const _vega_Proposal_State = require('./State.js')
const _vega_ProposalTerms = require('./../ProposalTerms/encode.js')
const _vega_ProposalError = require('./../ProposalError.js')
const _vega_ProposalRationale = require('./../ProposalRationale/encode.js')
const _vega_BatchProposalTerms = require('./../BatchProposalTerms/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.reference) writer.bytes(2, obj.reference, string)
  if (obj.partyId) writer.bytes(3, obj.partyId, string)
  if (obj.state) writer.varint(4, obj.state, _vega_Proposal_State)
  if (obj.timestamp) writer.varint(5, obj.timestamp, int64)
  if (obj.terms) writer.bytes(6, _vega_ProposalTerms.encode(obj.terms))
  if (obj.reason) writer.varint(7, obj.reason, _vega_ProposalError)
  if (obj.errorDetails) writer.bytes(8, obj.errorDetails, string)
  if (obj.rationale)
    writer.bytes(9, _vega_ProposalRationale.encode(obj.rationale))
  if (obj.requiredParticipation)
    writer.bytes(10, obj.requiredParticipation, string)
  if (obj.requiredMajority) writer.bytes(11, obj.requiredMajority, string)
  if (obj.requiredLiquidityProviderParticipation)
    writer.bytes(12, obj.requiredLiquidityProviderParticipation, string)
  if (obj.requiredLiquidityProviderMajority)
    writer.bytes(13, obj.requiredLiquidityProviderMajority, string)
  if (obj.batchTerms)
    writer.bytes(14, _vega_BatchProposalTerms.encode(obj.batchTerms))
  if (obj.batchId) writer.bytes(15, obj.batchId, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
