import Writer from "protobuf-codec/encode/writer.mjs"
import { string } from "protobuf-codec/encode/types.mjs"
import * as EpochData from "./../EpochData/encode.mjs"
import * as NodeStatus from "./../NodeStatus.mjs"
import * as Delegation from "./../Delegation/encode.mjs"
import * as RewardScore from "./../RewardScore/encode.mjs"
import * as RankingScore from "./../RankingScore/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.pubKey) writer.bytes(2, obj.pubKey, string)
  if (obj.tmPubKey) writer.bytes(3, obj.tmPubKey, string)
  if (obj.ethereumAddress) writer.bytes(4, obj.ethereumAddress, string)
  if (obj.infoUrl) writer.bytes(5, obj.infoUrl, string)
  if (obj.location) writer.bytes(6, obj.location, string)
  if (obj.stakedByOperator) writer.bytes(7, obj.stakedByOperator, string)
  if (obj.stakedByDelegates) writer.bytes(8, obj.stakedByDelegates, string)
  if (obj.stakedTotal) writer.bytes(9, obj.stakedTotal, string)
  if (obj.maxIntendedStake) writer.bytes(10, obj.maxIntendedStake, string)
  if (obj.pendingStake) writer.bytes(11, obj.pendingStake, string)
  if (obj.epochData) writer.bytes(12, EpochData.encode(obj.epochData))
  if (obj.status) writer.varint(13, obj.status, NodeStatus)
  if (obj.delegations?.length)
    obj.delegations.forEach((v) => writer.bytes(14, Delegation.encode(v)))
  if (obj.rewardScore) writer.bytes(15, RewardScore.encode(obj.rewardScore))
  if (obj.rankingScore) writer.bytes(16, RankingScore.encode(obj.rankingScore))
  if (obj.name) writer.bytes(17, obj.name, string)
  if (obj.avatarUrl) writer.bytes(18, obj.avatarUrl, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
