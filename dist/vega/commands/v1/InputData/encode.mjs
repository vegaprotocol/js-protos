import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64 } from "protobuf-codec/encode/types.mjs"
import * as OrderSubmission from "./../OrderSubmission/encode.mjs"
import * as OrderCancellation from "./../OrderCancellation/encode.mjs"
import * as OrderAmendment from "./../OrderAmendment/encode.mjs"
import * as WithdrawSubmission from "./../WithdrawSubmission/encode.mjs"
import * as ProposalSubmission from "./../ProposalSubmission/encode.mjs"
import * as VoteSubmission from "./../VoteSubmission/encode.mjs"
import * as LiquidityProvisionSubmission from "./../LiquidityProvisionSubmission/encode.mjs"
import * as DelegateSubmission from "./../DelegateSubmission/encode.mjs"
import * as UndelegateSubmission from "./../UndelegateSubmission/encode.mjs"
import * as LiquidityProvisionCancellation from "./../LiquidityProvisionCancellation/encode.mjs"
import * as LiquidityProvisionAmendment from "./../LiquidityProvisionAmendment/encode.mjs"
import * as Transfer from "./../Transfer/encode.mjs"
import * as CancelTransfer from "./../CancelTransfer/encode.mjs"
import * as AnnounceNode from "./../AnnounceNode/encode.mjs"
import * as NodeVote from "./../NodeVote/encode.mjs"
import * as NodeSignature from "./../NodeSignature/encode.mjs"
import * as ChainEvent from "./../ChainEvent/encode.mjs"
import * as KeyRotateSubmission from "./../KeyRotateSubmission/encode.mjs"
import * as StateVariableProposal from "./../StateVariableProposal/encode.mjs"
import * as ValidatorHeartbeat from "./../ValidatorHeartbeat/encode.mjs"
import * as EthereumKeyRotateSubmission from "./../EthereumKeyRotateSubmission/encode.mjs"
import * as ProtocolUpgradeProposal from "./../ProtocolUpgradeProposal/encode.mjs"
import * as OracleDataSubmission from "./../OracleDataSubmission/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.nonce) writer.varint(1, obj.nonce, uint64)
  if (obj.blockHeight) writer.varint(2, obj.blockHeight, uint64)

  if (obj.command) {
    const _o = obj.command
    if (_o.orderSubmission)
      writer.bytes(1001, OrderSubmission.encode(_o.orderSubmission))
    if (_o.orderCancellation)
      writer.bytes(1002, OrderCancellation.encode(_o.orderCancellation))
    if (_o.orderAmendment)
      writer.bytes(1003, OrderAmendment.encode(_o.orderAmendment))
    if (_o.withdrawSubmission)
      writer.bytes(1004, WithdrawSubmission.encode(_o.withdrawSubmission))
    if (_o.proposalSubmission)
      writer.bytes(1005, ProposalSubmission.encode(_o.proposalSubmission))
    if (_o.voteSubmission)
      writer.bytes(1006, VoteSubmission.encode(_o.voteSubmission))
    if (_o.liquidityProvisionSubmission)
      writer.bytes(
        1007,
        LiquidityProvisionSubmission.encode(_o.liquidityProvisionSubmission)
      )
    if (_o.delegateSubmission)
      writer.bytes(1008, DelegateSubmission.encode(_o.delegateSubmission))
    if (_o.undelegateSubmission)
      writer.bytes(1009, UndelegateSubmission.encode(_o.undelegateSubmission))
    if (_o.liquidityProvisionCancellation)
      writer.bytes(
        1010,
        LiquidityProvisionCancellation.encode(_o.liquidityProvisionCancellation)
      )
    if (_o.liquidityProvisionAmendment)
      writer.bytes(
        1011,
        LiquidityProvisionAmendment.encode(_o.liquidityProvisionAmendment)
      )
    if (_o.transfer) writer.bytes(1012, Transfer.encode(_o.transfer))
    if (_o.cancelTransfer)
      writer.bytes(1013, CancelTransfer.encode(_o.cancelTransfer))
    if (_o.announceNode)
      writer.bytes(1014, AnnounceNode.encode(_o.announceNode))
    if (_o.nodeVote) writer.bytes(2002, NodeVote.encode(_o.nodeVote))
    if (_o.nodeSignature)
      writer.bytes(2003, NodeSignature.encode(_o.nodeSignature))
    if (_o.chainEvent) writer.bytes(2004, ChainEvent.encode(_o.chainEvent))
    if (_o.keyRotateSubmission)
      writer.bytes(2005, KeyRotateSubmission.encode(_o.keyRotateSubmission))
    if (_o.stateVariableProposal)
      writer.bytes(2006, StateVariableProposal.encode(_o.stateVariableProposal))
    if (_o.validatorHeartbeat)
      writer.bytes(2007, ValidatorHeartbeat.encode(_o.validatorHeartbeat))
    if (_o.ethereumKeyRotateSubmission)
      writer.bytes(
        2008,
        EthereumKeyRotateSubmission.encode(_o.ethereumKeyRotateSubmission)
      )
    if (_o.protocolUpgradeProposal)
      writer.bytes(
        2009,
        ProtocolUpgradeProposal.encode(_o.protocolUpgradeProposal)
      )
    if (_o.oracleDataSubmission)
      writer.bytes(3001, OracleDataSubmission.encode(_o.oracleDataSubmission))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
