/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_EpochData = require('./../EpochData/decode.js')
const _vega_NodeStatus = require('./../NodeStatus.js')
const _vega_Delegation = require('./../Delegation/decode.js')
const _vega_RewardScore = require('./../RewardScore/decode.js')
const _vega_RankingScore = require('./../RankingScore/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$id = ''
  let field$pubKey = ''
  let field$tmPubKey = ''
  let field$ethereumAddress = ''
  let field$infoUrl = ''
  let field$location = ''
  let field$stakedByOperator = ''
  let field$stakedByDelegates = ''
  let field$stakedTotal = ''
  let field$maxIntendedStake = ''
  let field$pendingStake = ''
  let field$epochData = {}
  let field$status = _vega_NodeStatus.decode(0)
  const field$delegations = []
  let field$rewardScore = {}
  let field$rankingScore = {}
  let field$name = ''
  let field$avatarUrl = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$pubKey = string(data)
        break

      case 3:
        field$tmPubKey = string(data)
        break

      case 4:
        field$ethereumAddress = string(data)
        break

      case 5:
        field$infoUrl = string(data)
        break

      case 6:
        field$location = string(data)
        break

      case 7:
        field$stakedByOperator = string(data)
        break

      case 8:
        field$stakedByDelegates = string(data)
        break

      case 9:
        field$stakedTotal = string(data)
        break

      case 10:
        field$maxIntendedStake = string(data)
        break

      case 11:
        field$pendingStake = string(data)
        break

      case 12:
        field$epochData = _vega_EpochData.decode(data)
        break

      case 13:
        field$status = _vega_NodeStatus.decode(data)
        break

      case 14:
        field$delegations.push(_vega_Delegation.decode(data))
        break

      case 15:
        field$rewardScore = _vega_RewardScore.decode(data)
        break

      case 16:
        field$rankingScore = _vega_RankingScore.decode(data)
        break

      case 17:
        field$name = string(data)
        break

      case 18:
        field$avatarUrl = string(data)
        break
    }
  }
  return {
    id: field$id,
    pubKey: field$pubKey,
    tmPubKey: field$tmPubKey,
    ethereumAddress: field$ethereumAddress,
    infoUrl: field$infoUrl,
    location: field$location,
    stakedByOperator: field$stakedByOperator,
    stakedByDelegates: field$stakedByDelegates,
    stakedTotal: field$stakedTotal,
    maxIntendedStake: field$maxIntendedStake,
    pendingStake: field$pendingStake,
    epochData: field$epochData,
    status: field$status,
    delegations: field$delegations,
    rewardScore: field$rewardScore,
    rankingScore: field$rankingScore,
    name: field$name,
    avatarUrl: field$avatarUrl
  }
}
