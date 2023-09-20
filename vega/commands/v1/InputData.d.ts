/// autogenerated by protoc-plugin-js
import type { OrderSubmission } from './OrderSubmission'
import type { OrderCancellation } from './OrderCancellation'
import type { OrderAmendment } from './OrderAmendment'
import type { WithdrawSubmission } from './WithdrawSubmission'
import type { ProposalSubmission } from './ProposalSubmission'
import type { VoteSubmission } from './VoteSubmission'
import type { LiquidityProvisionSubmission } from './LiquidityProvisionSubmission'
import type { DelegateSubmission } from './DelegateSubmission'
import type { UndelegateSubmission } from './UndelegateSubmission'
import type { LiquidityProvisionCancellation } from './LiquidityProvisionCancellation'
import type { LiquidityProvisionAmendment } from './LiquidityProvisionAmendment'
import type { Transfer } from './Transfer'
import type { CancelTransfer } from './CancelTransfer'
import type { AnnounceNode } from './AnnounceNode'
import type { BatchMarketInstructions } from './BatchMarketInstructions'
import type { StopOrdersSubmission } from './StopOrdersSubmission'
import type { StopOrdersCancellation } from './StopOrdersCancellation'
import type { CreateReferralSet } from './CreateReferralSet'
import type { UpdateReferralSet } from './UpdateReferralSet'
import type { ApplyReferralCode } from './ApplyReferralCode'
import type { NodeVote } from './NodeVote'
import type { NodeSignature } from './NodeSignature'
import type { ChainEvent } from './ChainEvent'
import type { KeyRotateSubmission } from './KeyRotateSubmission'
import type { StateVariableProposal } from './StateVariableProposal'
import type { ValidatorHeartbeat } from './ValidatorHeartbeat'
import type { EthereumKeyRotateSubmission } from './EthereumKeyRotateSubmission'
import type { ProtocolUpgradeProposal } from './ProtocolUpgradeProposal'
import type { IssueSignatures } from './IssueSignatures'
import type { OracleDataSubmission } from './OracleDataSubmission'

export * from './InputData/encode.js'
export * from './InputData/decode.js'

export type InputData = {
  nonce: bigint
  blockHeight: bigint
  command:
    | { orderSubmission: OrderSubmission }
    | { orderCancellation: OrderCancellation }
    | { orderAmendment: OrderAmendment }
    | { withdrawSubmission: WithdrawSubmission }
    | { proposalSubmission: ProposalSubmission }
    | { voteSubmission: VoteSubmission }
    | { liquidityProvisionSubmission: LiquidityProvisionSubmission }
    | { delegateSubmission: DelegateSubmission }
    | { undelegateSubmission: UndelegateSubmission }
    | { liquidityProvisionCancellation: LiquidityProvisionCancellation }
    | { liquidityProvisionAmendment: LiquidityProvisionAmendment }
    | { transfer: Transfer }
    | { cancelTransfer: CancelTransfer }
    | { announceNode: AnnounceNode }
    | { batchMarketInstructions: BatchMarketInstructions }
    | { stopOrdersSubmission: StopOrdersSubmission }
    | { stopOrdersCancellation: StopOrdersCancellation }
    | { createReferralSet: CreateReferralSet }
    | { updateReferralSet: UpdateReferralSet }
    | { applyReferralCode: ApplyReferralCode }
    | { nodeVote: NodeVote }
    | { nodeSignature: NodeSignature }
    | { chainEvent: ChainEvent }
    | { keyRotateSubmission: KeyRotateSubmission }
    | { stateVariableProposal: StateVariableProposal }
    | { validatorHeartbeat: ValidatorHeartbeat }
    | { ethereumKeyRotateSubmission: EthereumKeyRotateSubmission }
    | { protocolUpgradeProposal: ProtocolUpgradeProposal }
    | { issueSignatures: IssueSignatures }
    | { oracleDataSubmission: OracleDataSubmission }
    | null
}
