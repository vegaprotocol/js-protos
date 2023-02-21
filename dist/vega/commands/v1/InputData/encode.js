/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { uint64 } from 'protobuf-codec/encode/types'
import * as _vega_commands_v1_OrderSubmission from './../OrderSubmission/encode.js'
import * as _vega_commands_v1_OrderCancellation from './../OrderCancellation/encode.js'
import * as _vega_commands_v1_OrderAmendment from './../OrderAmendment/encode.js'
import * as _vega_commands_v1_WithdrawSubmission from './../WithdrawSubmission/encode.js'
import * as _vega_commands_v1_ProposalSubmission from './../ProposalSubmission/encode.js'
import * as _vega_commands_v1_VoteSubmission from './../VoteSubmission/encode.js'
import * as _vega_commands_v1_LiquidityProvisionSubmission from './../LiquidityProvisionSubmission/encode.js'
import * as _vega_commands_v1_DelegateSubmission from './../DelegateSubmission/encode.js'
import * as _vega_commands_v1_UndelegateSubmission from './../UndelegateSubmission/encode.js'
import * as _vega_commands_v1_LiquidityProvisionCancellation from './../LiquidityProvisionCancellation/encode.js'
import * as _vega_commands_v1_LiquidityProvisionAmendment from './../LiquidityProvisionAmendment/encode.js'
import * as _vega_commands_v1_Transfer from './../Transfer/encode.js'
import * as _vega_commands_v1_CancelTransfer from './../CancelTransfer/encode.js'
import * as _vega_commands_v1_AnnounceNode from './../AnnounceNode/encode.js'
import * as _vega_commands_v1_BatchMarketInstructions from './../BatchMarketInstructions/encode.js'
import * as _vega_commands_v1_NodeVote from './../NodeVote/encode.js'
import * as _vega_commands_v1_NodeSignature from './../NodeSignature/encode.js'
import * as _vega_commands_v1_ChainEvent from './../ChainEvent/encode.js'
import * as _vega_commands_v1_KeyRotateSubmission from './../KeyRotateSubmission/encode.js'
import * as _vega_commands_v1_StateVariableProposal from './../StateVariableProposal/encode.js'
import * as _vega_commands_v1_ValidatorHeartbeat from './../ValidatorHeartbeat/encode.js'
import * as _vega_commands_v1_EthereumKeyRotateSubmission from './../EthereumKeyRotateSubmission/encode.js'
import * as _vega_commands_v1_ProtocolUpgradeProposal from './../ProtocolUpgradeProposal/encode.js'
import * as _vega_commands_v1_IssueSignatures from './../IssueSignatures/encode.js'
import * as _vega_commands_v1_OracleDataSubmission from './../OracleDataSubmission/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.nonce) writer.varint(1, obj.nonce, uint64)
  if (obj.blockHeight) writer.varint(2, obj.blockHeight, uint64)

  if (obj.command) {
    const _o = obj.command
    if (_o.orderSubmission)
      writer.bytes(
        1001,
        _vega_commands_v1_OrderSubmission.encode(_o.orderSubmission)
      )
    if (_o.orderCancellation)
      writer.bytes(
        1002,
        _vega_commands_v1_OrderCancellation.encode(_o.orderCancellation)
      )
    if (_o.orderAmendment)
      writer.bytes(
        1003,
        _vega_commands_v1_OrderAmendment.encode(_o.orderAmendment)
      )
    if (_o.withdrawSubmission)
      writer.bytes(
        1004,
        _vega_commands_v1_WithdrawSubmission.encode(_o.withdrawSubmission)
      )
    if (_o.proposalSubmission)
      writer.bytes(
        1005,
        _vega_commands_v1_ProposalSubmission.encode(_o.proposalSubmission)
      )
    if (_o.voteSubmission)
      writer.bytes(
        1006,
        _vega_commands_v1_VoteSubmission.encode(_o.voteSubmission)
      )
    if (_o.liquidityProvisionSubmission)
      writer.bytes(
        1007,
        _vega_commands_v1_LiquidityProvisionSubmission.encode(
          _o.liquidityProvisionSubmission
        )
      )
    if (_o.delegateSubmission)
      writer.bytes(
        1008,
        _vega_commands_v1_DelegateSubmission.encode(_o.delegateSubmission)
      )
    if (_o.undelegateSubmission)
      writer.bytes(
        1009,
        _vega_commands_v1_UndelegateSubmission.encode(_o.undelegateSubmission)
      )
    if (_o.liquidityProvisionCancellation)
      writer.bytes(
        1010,
        _vega_commands_v1_LiquidityProvisionCancellation.encode(
          _o.liquidityProvisionCancellation
        )
      )
    if (_o.liquidityProvisionAmendment)
      writer.bytes(
        1011,
        _vega_commands_v1_LiquidityProvisionAmendment.encode(
          _o.liquidityProvisionAmendment
        )
      )
    if (_o.transfer)
      writer.bytes(1012, _vega_commands_v1_Transfer.encode(_o.transfer))
    if (_o.cancelTransfer)
      writer.bytes(
        1013,
        _vega_commands_v1_CancelTransfer.encode(_o.cancelTransfer)
      )
    if (_o.announceNode)
      writer.bytes(1014, _vega_commands_v1_AnnounceNode.encode(_o.announceNode))
    if (_o.batchMarketInstructions)
      writer.bytes(
        1015,
        _vega_commands_v1_BatchMarketInstructions.encode(
          _o.batchMarketInstructions
        )
      )
    if (_o.nodeVote)
      writer.bytes(2002, _vega_commands_v1_NodeVote.encode(_o.nodeVote))
    if (_o.nodeSignature)
      writer.bytes(
        2003,
        _vega_commands_v1_NodeSignature.encode(_o.nodeSignature)
      )
    if (_o.chainEvent)
      writer.bytes(2004, _vega_commands_v1_ChainEvent.encode(_o.chainEvent))
    if (_o.keyRotateSubmission)
      writer.bytes(
        2005,
        _vega_commands_v1_KeyRotateSubmission.encode(_o.keyRotateSubmission)
      )
    if (_o.stateVariableProposal)
      writer.bytes(
        2006,
        _vega_commands_v1_StateVariableProposal.encode(_o.stateVariableProposal)
      )
    if (_o.validatorHeartbeat)
      writer.bytes(
        2007,
        _vega_commands_v1_ValidatorHeartbeat.encode(_o.validatorHeartbeat)
      )
    if (_o.ethereumKeyRotateSubmission)
      writer.bytes(
        2008,
        _vega_commands_v1_EthereumKeyRotateSubmission.encode(
          _o.ethereumKeyRotateSubmission
        )
      )
    if (_o.protocolUpgradeProposal)
      writer.bytes(
        2009,
        _vega_commands_v1_ProtocolUpgradeProposal.encode(
          _o.protocolUpgradeProposal
        )
      )
    if (_o.issueSignatures)
      writer.bytes(
        2010,
        _vega_commands_v1_IssueSignatures.encode(_o.issueSignatures)
      )
    if (_o.oracleDataSubmission)
      writer.bytes(
        3001,
        _vega_commands_v1_OracleDataSubmission.encode(_o.oracleDataSubmission)
      )
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }