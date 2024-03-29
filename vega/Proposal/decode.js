/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, int64 } = require('protobuf-codec/decode/types')
const _vega_Proposal_State = require('./State.js')
const _vega_ProposalTerms = require('./../ProposalTerms/decode.js')
const _vega_ProposalError = require('./../ProposalError.js')
const _vega_ProposalRationale = require('./../ProposalRationale/decode.js')
const _vega_BatchProposalTerms = require('./../BatchProposalTerms/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$id = ''
  let field$reference = ''
  let field$partyId = ''
  let field$state = _vega_Proposal_State.decode(0)
  let field$timestamp = 0n
  let field$terms = null
  let field$reason = null
  let field$errorDetails = null
  let field$rationale = {}
  let field$requiredParticipation = ''
  let field$requiredMajority = ''
  let field$requiredLiquidityProviderParticipation = null
  let field$requiredLiquidityProviderMajority = null
  let field$batchTerms = null
  let field$batchId = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$reference = string(data)
        break

      case 3:
        field$partyId = string(data)
        break

      case 4:
        field$state = _vega_Proposal_State.decode(data)
        break

      case 5:
        field$timestamp = int64(data)
        break

      case 6:
        field$terms = _vega_ProposalTerms.decode(data)
        break

      case 7:
        field$reason = _vega_ProposalError.decode(data)
        break

      case 8:
        field$errorDetails = string(data)
        break

      case 9:
        field$rationale = _vega_ProposalRationale.decode(data)
        break

      case 10:
        field$requiredParticipation = string(data)
        break

      case 11:
        field$requiredMajority = string(data)
        break

      case 12:
        field$requiredLiquidityProviderParticipation = string(data)
        break

      case 13:
        field$requiredLiquidityProviderMajority = string(data)
        break

      case 14:
        field$batchTerms = _vega_BatchProposalTerms.decode(data)
        break

      case 15:
        field$batchId = string(data)
        break
    }
  }
  return {
    id: field$id,
    reference: field$reference,
    partyId: field$partyId,
    state: field$state,
    timestamp: field$timestamp,
    terms: field$terms,
    reason: field$reason,
    errorDetails: field$errorDetails,
    rationale: field$rationale,
    requiredParticipation: field$requiredParticipation,
    requiredMajority: field$requiredMajority,
    requiredLiquidityProviderParticipation:
      field$requiredLiquidityProviderParticipation,
    requiredLiquidityProviderMajority: field$requiredLiquidityProviderMajority,
    batchTerms: field$batchTerms,
    batchId: field$batchId
  }
}
