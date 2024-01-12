/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { uint64 } = require('protobuf-codec/decode/types')
const _vega_commands_v1_OrderSubmission = require('./../OrderSubmission/decode.js')
const _vega_commands_v1_OrderCancellation = require('./../OrderCancellation/decode.js')
const _vega_commands_v1_OrderAmendment = require('./../OrderAmendment/decode.js')
const _vega_commands_v1_WithdrawSubmission = require('./../WithdrawSubmission/decode.js')
const _vega_commands_v1_ProposalSubmission = require('./../ProposalSubmission/decode.js')
const _vega_commands_v1_VoteSubmission = require('./../VoteSubmission/decode.js')
const _vega_commands_v1_LiquidityProvisionSubmission = require('./../LiquidityProvisionSubmission/decode.js')
const _vega_commands_v1_DelegateSubmission = require('./../DelegateSubmission/decode.js')
const _vega_commands_v1_UndelegateSubmission = require('./../UndelegateSubmission/decode.js')
const _vega_commands_v1_LiquidityProvisionCancellation = require('./../LiquidityProvisionCancellation/decode.js')
const _vega_commands_v1_LiquidityProvisionAmendment = require('./../LiquidityProvisionAmendment/decode.js')
const _vega_commands_v1_Transfer = require('./../Transfer/decode.js')
const _vega_commands_v1_CancelTransfer = require('./../CancelTransfer/decode.js')
const _vega_commands_v1_AnnounceNode = require('./../AnnounceNode/decode.js')
const _vega_commands_v1_BatchMarketInstructions = require('./../BatchMarketInstructions/decode.js')
const _vega_commands_v1_StopOrdersSubmission = require('./../StopOrdersSubmission/decode.js')
const _vega_commands_v1_StopOrdersCancellation = require('./../StopOrdersCancellation/decode.js')
const _vega_commands_v1_CreateReferralSet = require('./../CreateReferralSet/decode.js')
const _vega_commands_v1_UpdateReferralSet = require('./../UpdateReferralSet/decode.js')
const _vega_commands_v1_ApplyReferralCode = require('./../ApplyReferralCode/decode.js')
const _vega_commands_v1_UpdateMarginMode = require('./../UpdateMarginMode/decode.js')
const _vega_commands_v1_JoinTeam = require('./../JoinTeam/decode.js')
const _vega_commands_v1_NodeVote = require('./../NodeVote/decode.js')
const _vega_commands_v1_NodeSignature = require('./../NodeSignature/decode.js')
const _vega_commands_v1_ChainEvent = require('./../ChainEvent/decode.js')
const _vega_commands_v1_KeyRotateSubmission = require('./../KeyRotateSubmission/decode.js')
const _vega_commands_v1_StateVariableProposal = require('./../StateVariableProposal/decode.js')
const _vega_commands_v1_ValidatorHeartbeat = require('./../ValidatorHeartbeat/decode.js')
const _vega_commands_v1_EthereumKeyRotateSubmission = require('./../EthereumKeyRotateSubmission/decode.js')
const _vega_commands_v1_ProtocolUpgradeProposal = require('./../ProtocolUpgradeProposal/decode.js')
const _vega_commands_v1_IssueSignatures = require('./../IssueSignatures/decode.js')
const _vega_commands_v1_OracleDataSubmission = require('./../OracleDataSubmission/decode.js')
const _vega_commands_v1_BatchProposalSubmission = require('./../BatchProposalSubmission/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$nonce = 0n
  let field$blockHeight = 0n
  let field$command = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$nonce = uint64(data)
        break

      case 2:
        field$blockHeight = uint64(data)
        break

      case 1001:
        field$command = {
          orderSubmission: _vega_commands_v1_OrderSubmission.decode(data)
        }
        break

      case 1002:
        field$command = {
          orderCancellation: _vega_commands_v1_OrderCancellation.decode(data)
        }
        break

      case 1003:
        field$command = {
          orderAmendment: _vega_commands_v1_OrderAmendment.decode(data)
        }
        break

      case 1004:
        field$command = {
          withdrawSubmission: _vega_commands_v1_WithdrawSubmission.decode(data)
        }
        break

      case 1005:
        field$command = {
          proposalSubmission: _vega_commands_v1_ProposalSubmission.decode(data)
        }
        break

      case 1006:
        field$command = {
          voteSubmission: _vega_commands_v1_VoteSubmission.decode(data)
        }
        break

      case 1007:
        field$command = {
          liquidityProvisionSubmission:
            _vega_commands_v1_LiquidityProvisionSubmission.decode(data)
        }
        break

      case 1008:
        field$command = {
          delegateSubmission: _vega_commands_v1_DelegateSubmission.decode(data)
        }
        break

      case 1009:
        field$command = {
          undelegateSubmission:
            _vega_commands_v1_UndelegateSubmission.decode(data)
        }
        break

      case 1010:
        field$command = {
          liquidityProvisionCancellation:
            _vega_commands_v1_LiquidityProvisionCancellation.decode(data)
        }
        break

      case 1011:
        field$command = {
          liquidityProvisionAmendment:
            _vega_commands_v1_LiquidityProvisionAmendment.decode(data)
        }
        break

      case 1012:
        field$command = { transfer: _vega_commands_v1_Transfer.decode(data) }
        break

      case 1013:
        field$command = {
          cancelTransfer: _vega_commands_v1_CancelTransfer.decode(data)
        }
        break

      case 1014:
        field$command = {
          announceNode: _vega_commands_v1_AnnounceNode.decode(data)
        }
        break

      case 1015:
        field$command = {
          batchMarketInstructions:
            _vega_commands_v1_BatchMarketInstructions.decode(data)
        }
        break

      case 1016:
        field$command = {
          stopOrdersSubmission:
            _vega_commands_v1_StopOrdersSubmission.decode(data)
        }
        break

      case 1017:
        field$command = {
          stopOrdersCancellation:
            _vega_commands_v1_StopOrdersCancellation.decode(data)
        }
        break

      case 1018:
        field$command = {
          createReferralSet: _vega_commands_v1_CreateReferralSet.decode(data)
        }
        break

      case 1019:
        field$command = {
          updateReferralSet: _vega_commands_v1_UpdateReferralSet.decode(data)
        }
        break

      case 1020:
        field$command = {
          applyReferralCode: _vega_commands_v1_ApplyReferralCode.decode(data)
        }
        break

      case 1021:
        field$command = {
          updateMarginMode: _vega_commands_v1_UpdateMarginMode.decode(data)
        }
        break

      case 1022:
        field$command = { joinTeam: _vega_commands_v1_JoinTeam.decode(data) }
        break

      case 2002:
        field$command = { nodeVote: _vega_commands_v1_NodeVote.decode(data) }
        break

      case 2003:
        field$command = {
          nodeSignature: _vega_commands_v1_NodeSignature.decode(data)
        }
        break

      case 2004:
        field$command = {
          chainEvent: _vega_commands_v1_ChainEvent.decode(data)
        }
        break

      case 2005:
        field$command = {
          keyRotateSubmission:
            _vega_commands_v1_KeyRotateSubmission.decode(data)
        }
        break

      case 2006:
        field$command = {
          stateVariableProposal:
            _vega_commands_v1_StateVariableProposal.decode(data)
        }
        break

      case 2007:
        field$command = {
          validatorHeartbeat: _vega_commands_v1_ValidatorHeartbeat.decode(data)
        }
        break

      case 2008:
        field$command = {
          ethereumKeyRotateSubmission:
            _vega_commands_v1_EthereumKeyRotateSubmission.decode(data)
        }
        break

      case 2009:
        field$command = {
          protocolUpgradeProposal:
            _vega_commands_v1_ProtocolUpgradeProposal.decode(data)
        }
        break

      case 2010:
        field$command = {
          issueSignatures: _vega_commands_v1_IssueSignatures.decode(data)
        }
        break

      case 3001:
        field$command = {
          oracleDataSubmission:
            _vega_commands_v1_OracleDataSubmission.decode(data)
        }
        break

      case 3002:
        field$command = {
          batchProposalSubmission:
            _vega_commands_v1_BatchProposalSubmission.decode(data)
        }
        break
    }
  }
  return {
    nonce: field$nonce,
    blockHeight: field$blockHeight,
    command: field$command
  }
}
