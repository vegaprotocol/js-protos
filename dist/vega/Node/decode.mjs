import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as EpochData from "./../EpochData/decode.mjs"
import * as NodeStatus from "./../NodeStatus.mjs"
import * as Delegation from "./../Delegation/decode.mjs"
import * as RewardScore from "./../RewardScore/decode.mjs"
import * as RankingScore from "./../RankingScore/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let id = {}
  let pubKey = {}
  let tmPubKey = {}
  let ethereumAddress = {}
  let infoUrl = {}
  let location = {}
  let stakedByOperator = {}
  let stakedByDelegates = {}
  let stakedTotal = {}
  let maxIntendedStake = {}
  let pendingStake = {}
  let epochData = {}
  let status = 0
  const delegations = []
  let rewardScore = {}
  let rankingScore = {}
  let name = {}
  let avatarUrl = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        id = data
        break
      case 2:
        pubKey = data
        break
      case 3:
        tmPubKey = data
        break
      case 4:
        ethereumAddress = data
        break
      case 5:
        infoUrl = data
        break
      case 6:
        location = data
        break
      case 7:
        stakedByOperator = data
        break
      case 8:
        stakedByDelegates = data
        break
      case 9:
        stakedTotal = data
        break
      case 10:
        maxIntendedStake = data
        break
      case 11:
        pendingStake = data
        break
      case 12:
        epochData = data
        break
      case 13:
        status = data
        break
      case 14:
        delegations.push(data)
        break
      case 15:
        rewardScore = data
        break
      case 16:
        rankingScore = data
        break
      case 17:
        name = data
        break
      case 18:
        avatarUrl = data
        break
    }
  }

  return {
    id,
    pubKey,
    tmPubKey,
    ethereumAddress,
    infoUrl,
    location,
    stakedByOperator,
    stakedByDelegates,
    stakedTotal,
    maxIntendedStake,
    pendingStake,
    epochData,
    status,
    delegations,
    rewardScore,
    rankingScore,
    name,
    avatarUrl,
  }
}
