/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { uint64 } = require('protobuf-codec/encode/types')
const _vega_commands_v1_OrderSubmission = require('./../OrderSubmission/encode.js')
const _vega_commands_v1_OrderCancellation = require('./../OrderCancellation/encode.js')
const _vega_commands_v1_OrderAmendment = require('./../OrderAmendment/encode.js')
const _vega_commands_v1_WithdrawSubmission = require('./../WithdrawSubmission/encode.js')
const _vega_commands_v1_ProposalSubmission = require('./../ProposalSubmission/encode.js')
const _vega_commands_v1_VoteSubmission = require('./../VoteSubmission/encode.js')
const _vega_commands_v1_LiquidityProvisionSubmission = require('./../LiquidityProvisionSubmission/encode.js')
const _vega_commands_v1_DelegateSubmission = require('./../DelegateSubmission/encode.js')
const _vega_commands_v1_UndelegateSubmission = require('./../UndelegateSubmission/encode.js')
const _vega_commands_v1_LiquidityProvisionCancellation = require('./../LiquidityProvisionCancellation/encode.js')
const _vega_commands_v1_LiquidityProvisionAmendment = require('./../LiquidityProvisionAmendment/encode.js')
const _vega_commands_v1_Transfer = require('./../Transfer/encode.js')
const _vega_commands_v1_CancelTransfer = require('./../CancelTransfer/encode.js')
const _vega_commands_v1_AnnounceNode = require('./../AnnounceNode/encode.js')
const _vega_commands_v1_BatchMarketInstructions = require('./../BatchMarketInstructions/encode.js')
const _vega_commands_v1_StopOrdersSubmission = require('./../StopOrdersSubmission/encode.js')
const _vega_commands_v1_StopOrdersCancellation = require('./../StopOrdersCancellation/encode.js')
const _vega_commands_v1_CreateReferralSet = require('./../CreateReferralSet/encode.js')
const _vega_commands_v1_UpdateReferralSet = require('./../UpdateReferralSet/encode.js')
const _vega_commands_v1_ApplyReferralCode = require('./../ApplyReferralCode/encode.js')
const _vega_commands_v1_UpdateMarginMode = require('./../UpdateMarginMode/encode.js')
const _vega_commands_v1_JoinTeam = require('./../JoinTeam/encode.js')
const _vega_commands_v1_BatchProposalSubmission = require('./../BatchProposalSubmission/encode.js')
const _vega_commands_v1_UpdatePartyProfile = require('./../UpdatePartyProfile/encode.js')
const _vega_commands_v1_SubmitAMM = require('./../SubmitAMM/encode.js')
const _vega_commands_v1_AmendAMM = require('./../AmendAMM/encode.js')
const _vega_commands_v1_CancelAMM = require('./../CancelAMM/encode.js')
const _vega_commands_v1_NodeVote = require('./../NodeVote/encode.js')
const _vega_commands_v1_NodeSignature = require('./../NodeSignature/encode.js')
const _vega_commands_v1_ChainEvent = require('./../ChainEvent/encode.js')
const _vega_commands_v1_KeyRotateSubmission = require('./../KeyRotateSubmission/encode.js')
const _vega_commands_v1_StateVariableProposal = require('./../StateVariableProposal/encode.js')
const _vega_commands_v1_ValidatorHeartbeat = require('./../ValidatorHeartbeat/encode.js')
const _vega_commands_v1_EthereumKeyRotateSubmission = require('./../EthereumKeyRotateSubmission/encode.js')
const _vega_commands_v1_ProtocolUpgradeProposal = require('./../ProtocolUpgradeProposal/encode.js')
const _vega_commands_v1_IssueSignatures = require('./../IssueSignatures/encode.js')
const _vega_commands_v1_OracleDataSubmission = require('./../OracleDataSubmission/encode.js')
const _vega_commands_v1_DelayedTransactionsWrapper = require('./../DelayedTransactionsWrapper/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.nonce) writer.varint(1, obj.nonce, uint64)
  if (obj.blockHeight) writer.varint(2, obj.blockHeight, uint64)

  if (obj.command?.orderSubmission ?? obj.orderSubmission)
    writer.bytes(
      1001,
      _vega_commands_v1_OrderSubmission.encode(
        obj.command?.orderSubmission ?? obj.orderSubmission
      )
    )
  if (obj.command?.orderCancellation ?? obj.orderCancellation)
    writer.bytes(
      1002,
      _vega_commands_v1_OrderCancellation.encode(
        obj.command?.orderCancellation ?? obj.orderCancellation
      )
    )
  if (obj.command?.orderAmendment ?? obj.orderAmendment)
    writer.bytes(
      1003,
      _vega_commands_v1_OrderAmendment.encode(
        obj.command?.orderAmendment ?? obj.orderAmendment
      )
    )
  if (obj.command?.withdrawSubmission ?? obj.withdrawSubmission)
    writer.bytes(
      1004,
      _vega_commands_v1_WithdrawSubmission.encode(
        obj.command?.withdrawSubmission ?? obj.withdrawSubmission
      )
    )
  if (obj.command?.proposalSubmission ?? obj.proposalSubmission)
    writer.bytes(
      1005,
      _vega_commands_v1_ProposalSubmission.encode(
        obj.command?.proposalSubmission ?? obj.proposalSubmission
      )
    )
  if (obj.command?.voteSubmission ?? obj.voteSubmission)
    writer.bytes(
      1006,
      _vega_commands_v1_VoteSubmission.encode(
        obj.command?.voteSubmission ?? obj.voteSubmission
      )
    )
  if (
    obj.command?.liquidityProvisionSubmission ??
    obj.liquidityProvisionSubmission
  )
    writer.bytes(
      1007,
      _vega_commands_v1_LiquidityProvisionSubmission.encode(
        obj.command?.liquidityProvisionSubmission ??
          obj.liquidityProvisionSubmission
      )
    )
  if (obj.command?.delegateSubmission ?? obj.delegateSubmission)
    writer.bytes(
      1008,
      _vega_commands_v1_DelegateSubmission.encode(
        obj.command?.delegateSubmission ?? obj.delegateSubmission
      )
    )
  if (obj.command?.undelegateSubmission ?? obj.undelegateSubmission)
    writer.bytes(
      1009,
      _vega_commands_v1_UndelegateSubmission.encode(
        obj.command?.undelegateSubmission ?? obj.undelegateSubmission
      )
    )
  if (
    obj.command?.liquidityProvisionCancellation ??
    obj.liquidityProvisionCancellation
  )
    writer.bytes(
      1010,
      _vega_commands_v1_LiquidityProvisionCancellation.encode(
        obj.command?.liquidityProvisionCancellation ??
          obj.liquidityProvisionCancellation
      )
    )
  if (
    obj.command?.liquidityProvisionAmendment ??
    obj.liquidityProvisionAmendment
  )
    writer.bytes(
      1011,
      _vega_commands_v1_LiquidityProvisionAmendment.encode(
        obj.command?.liquidityProvisionAmendment ??
          obj.liquidityProvisionAmendment
      )
    )
  if (obj.command?.transfer ?? obj.transfer)
    writer.bytes(
      1012,
      _vega_commands_v1_Transfer.encode(obj.command?.transfer ?? obj.transfer)
    )
  if (obj.command?.cancelTransfer ?? obj.cancelTransfer)
    writer.bytes(
      1013,
      _vega_commands_v1_CancelTransfer.encode(
        obj.command?.cancelTransfer ?? obj.cancelTransfer
      )
    )
  if (obj.command?.announceNode ?? obj.announceNode)
    writer.bytes(
      1014,
      _vega_commands_v1_AnnounceNode.encode(
        obj.command?.announceNode ?? obj.announceNode
      )
    )
  if (obj.command?.batchMarketInstructions ?? obj.batchMarketInstructions)
    writer.bytes(
      1015,
      _vega_commands_v1_BatchMarketInstructions.encode(
        obj.command?.batchMarketInstructions ?? obj.batchMarketInstructions
      )
    )
  if (obj.command?.stopOrdersSubmission ?? obj.stopOrdersSubmission)
    writer.bytes(
      1016,
      _vega_commands_v1_StopOrdersSubmission.encode(
        obj.command?.stopOrdersSubmission ?? obj.stopOrdersSubmission
      )
    )
  if (obj.command?.stopOrdersCancellation ?? obj.stopOrdersCancellation)
    writer.bytes(
      1017,
      _vega_commands_v1_StopOrdersCancellation.encode(
        obj.command?.stopOrdersCancellation ?? obj.stopOrdersCancellation
      )
    )
  if (obj.command?.createReferralSet ?? obj.createReferralSet)
    writer.bytes(
      1018,
      _vega_commands_v1_CreateReferralSet.encode(
        obj.command?.createReferralSet ?? obj.createReferralSet
      )
    )
  if (obj.command?.updateReferralSet ?? obj.updateReferralSet)
    writer.bytes(
      1019,
      _vega_commands_v1_UpdateReferralSet.encode(
        obj.command?.updateReferralSet ?? obj.updateReferralSet
      )
    )
  if (obj.command?.applyReferralCode ?? obj.applyReferralCode)
    writer.bytes(
      1020,
      _vega_commands_v1_ApplyReferralCode.encode(
        obj.command?.applyReferralCode ?? obj.applyReferralCode
      )
    )
  if (obj.command?.updateMarginMode ?? obj.updateMarginMode)
    writer.bytes(
      1021,
      _vega_commands_v1_UpdateMarginMode.encode(
        obj.command?.updateMarginMode ?? obj.updateMarginMode
      )
    )
  if (obj.command?.joinTeam ?? obj.joinTeam)
    writer.bytes(
      1022,
      _vega_commands_v1_JoinTeam.encode(obj.command?.joinTeam ?? obj.joinTeam)
    )
  if (obj.command?.batchProposalSubmission ?? obj.batchProposalSubmission)
    writer.bytes(
      1023,
      _vega_commands_v1_BatchProposalSubmission.encode(
        obj.command?.batchProposalSubmission ?? obj.batchProposalSubmission
      )
    )
  if (obj.command?.updatePartyProfile ?? obj.updatePartyProfile)
    writer.bytes(
      1024,
      _vega_commands_v1_UpdatePartyProfile.encode(
        obj.command?.updatePartyProfile ?? obj.updatePartyProfile
      )
    )
  if (obj.command?.submitAmm ?? obj.submitAmm)
    writer.bytes(
      1025,
      _vega_commands_v1_SubmitAMM.encode(
        obj.command?.submitAmm ?? obj.submitAmm
      )
    )
  if (obj.command?.amendAmm ?? obj.amendAmm)
    writer.bytes(
      1026,
      _vega_commands_v1_AmendAMM.encode(obj.command?.amendAmm ?? obj.amendAmm)
    )
  if (obj.command?.cancelAmm ?? obj.cancelAmm)
    writer.bytes(
      1027,
      _vega_commands_v1_CancelAMM.encode(
        obj.command?.cancelAmm ?? obj.cancelAmm
      )
    )
  if (obj.command?.nodeVote ?? obj.nodeVote)
    writer.bytes(
      2002,
      _vega_commands_v1_NodeVote.encode(obj.command?.nodeVote ?? obj.nodeVote)
    )
  if (obj.command?.nodeSignature ?? obj.nodeSignature)
    writer.bytes(
      2003,
      _vega_commands_v1_NodeSignature.encode(
        obj.command?.nodeSignature ?? obj.nodeSignature
      )
    )
  if (obj.command?.chainEvent ?? obj.chainEvent)
    writer.bytes(
      2004,
      _vega_commands_v1_ChainEvent.encode(
        obj.command?.chainEvent ?? obj.chainEvent
      )
    )
  if (obj.command?.keyRotateSubmission ?? obj.keyRotateSubmission)
    writer.bytes(
      2005,
      _vega_commands_v1_KeyRotateSubmission.encode(
        obj.command?.keyRotateSubmission ?? obj.keyRotateSubmission
      )
    )
  if (obj.command?.stateVariableProposal ?? obj.stateVariableProposal)
    writer.bytes(
      2006,
      _vega_commands_v1_StateVariableProposal.encode(
        obj.command?.stateVariableProposal ?? obj.stateVariableProposal
      )
    )
  if (obj.command?.validatorHeartbeat ?? obj.validatorHeartbeat)
    writer.bytes(
      2007,
      _vega_commands_v1_ValidatorHeartbeat.encode(
        obj.command?.validatorHeartbeat ?? obj.validatorHeartbeat
      )
    )
  if (
    obj.command?.ethereumKeyRotateSubmission ??
    obj.ethereumKeyRotateSubmission
  )
    writer.bytes(
      2008,
      _vega_commands_v1_EthereumKeyRotateSubmission.encode(
        obj.command?.ethereumKeyRotateSubmission ??
          obj.ethereumKeyRotateSubmission
      )
    )
  if (obj.command?.protocolUpgradeProposal ?? obj.protocolUpgradeProposal)
    writer.bytes(
      2009,
      _vega_commands_v1_ProtocolUpgradeProposal.encode(
        obj.command?.protocolUpgradeProposal ?? obj.protocolUpgradeProposal
      )
    )
  if (obj.command?.issueSignatures ?? obj.issueSignatures)
    writer.bytes(
      2010,
      _vega_commands_v1_IssueSignatures.encode(
        obj.command?.issueSignatures ?? obj.issueSignatures
      )
    )
  if (obj.command?.oracleDataSubmission ?? obj.oracleDataSubmission)
    writer.bytes(
      3001,
      _vega_commands_v1_OracleDataSubmission.encode(
        obj.command?.oracleDataSubmission ?? obj.oracleDataSubmission
      )
    )
  if (obj.command?.delayedTransactionsWrapper ?? obj.delayedTransactionsWrapper)
    writer.bytes(
      4000,
      _vega_commands_v1_DelayedTransactionsWrapper.encode(
        obj.command?.delayedTransactionsWrapper ??
          obj.delayedTransactionsWrapper
      )
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
