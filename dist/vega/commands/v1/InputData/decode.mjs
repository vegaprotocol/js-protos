import reader from "protobuf-codec/decode/reader.mjs"
import { uint64 } from "protobuf-codec/decode/types.mjs"
import * as OrderSubmission from "./../OrderSubmission/decode.mjs"
import * as OrderCancellation from "./../OrderCancellation/decode.mjs"
import * as OrderAmendment from "./../OrderAmendment/decode.mjs"
import * as WithdrawSubmission from "./../WithdrawSubmission/decode.mjs"
import * as ProposalSubmission from "./../ProposalSubmission/decode.mjs"
import * as VoteSubmission from "./../VoteSubmission/decode.mjs"
import * as LiquidityProvisionSubmission from "./../LiquidityProvisionSubmission/decode.mjs"
import * as DelegateSubmission from "./../DelegateSubmission/decode.mjs"
import * as UndelegateSubmission from "./../UndelegateSubmission/decode.mjs"
import * as LiquidityProvisionCancellation from "./../LiquidityProvisionCancellation/decode.mjs"
import * as LiquidityProvisionAmendment from "./../LiquidityProvisionAmendment/decode.mjs"
import * as Transfer from "./../Transfer/decode.mjs"
import * as CancelTransfer from "./../CancelTransfer/decode.mjs"
import * as AnnounceNode from "./../AnnounceNode/decode.mjs"
import * as NodeVote from "./../NodeVote/decode.mjs"
import * as NodeSignature from "./../NodeSignature/decode.mjs"
import * as ChainEvent from "./../ChainEvent/decode.mjs"
import * as KeyRotateSubmission from "./../KeyRotateSubmission/decode.mjs"
import * as StateVariableProposal from "./../StateVariableProposal/decode.mjs"
import * as ValidatorHeartbeat from "./../ValidatorHeartbeat/decode.mjs"
import * as EthereumKeyRotateSubmission from "./../EthereumKeyRotateSubmission/decode.mjs"
import * as ProtocolUpgradeProposal from "./../ProtocolUpgradeProposal/decode.mjs"
import * as OracleDataSubmission from "./../OracleDataSubmission/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let nonce = 0n
  let blockHeight = 0n
  let orderSubmission = {}
  let orderCancellation = {}
  let orderAmendment = {}
  let withdrawSubmission = {}
  let proposalSubmission = {}
  let voteSubmission = {}
  let liquidityProvisionSubmission = {}
  let delegateSubmission = {}
  let undelegateSubmission = {}
  let liquidityProvisionCancellation = {}
  let liquidityProvisionAmendment = {}
  let transfer = {}
  let cancelTransfer = {}
  let announceNode = {}
  let nodeVote = {}
  let nodeSignature = {}
  let chainEvent = {}
  let keyRotateSubmission = {}
  let stateVariableProposal = {}
  let validatorHeartbeat = {}
  let ethereumKeyRotateSubmission = {}
  let protocolUpgradeProposal = {}
  let oracleDataSubmission = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        nonce = data
        break
      case 2:
        blockHeight = data
        break
      case 1001:
        orderSubmission = data
        break
      case 1002:
        orderCancellation = data
        break
      case 1003:
        orderAmendment = data
        break
      case 1004:
        withdrawSubmission = data
        break
      case 1005:
        proposalSubmission = data
        break
      case 1006:
        voteSubmission = data
        break
      case 1007:
        liquidityProvisionSubmission = data
        break
      case 1008:
        delegateSubmission = data
        break
      case 1009:
        undelegateSubmission = data
        break
      case 1010:
        liquidityProvisionCancellation = data
        break
      case 1011:
        liquidityProvisionAmendment = data
        break
      case 1012:
        transfer = data
        break
      case 1013:
        cancelTransfer = data
        break
      case 1014:
        announceNode = data
        break
      case 2002:
        nodeVote = data
        break
      case 2003:
        nodeSignature = data
        break
      case 2004:
        chainEvent = data
        break
      case 2005:
        keyRotateSubmission = data
        break
      case 2006:
        stateVariableProposal = data
        break
      case 2007:
        validatorHeartbeat = data
        break
      case 2008:
        ethereumKeyRotateSubmission = data
        break
      case 2009:
        protocolUpgradeProposal = data
        break
      case 3001:
        oracleDataSubmission = data
        break
    }
  }

  return {
    nonce,
    blockHeight,
    orderSubmission,
    orderCancellation,
    orderAmendment,
    withdrawSubmission,
    proposalSubmission,
    voteSubmission,
    liquidityProvisionSubmission,
    delegateSubmission,
    undelegateSubmission,
    liquidityProvisionCancellation,
    liquidityProvisionAmendment,
    transfer,
    cancelTransfer,
    announceNode,
    nodeVote,
    nodeSignature,
    chainEvent,
    keyRotateSubmission,
    stateVariableProposal,
    validatorHeartbeat,
    ethereumKeyRotateSubmission,
    protocolUpgradeProposal,
    oracleDataSubmission,
  }
}
