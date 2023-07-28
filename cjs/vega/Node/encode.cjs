'use strict';

var Writer = require('protobuf-codec/encode/writer');
var types = require('protobuf-codec/encode/types');
var encode$1 = require('../EpochData/encode.cjs');
var NodeStatus = require('../NodeStatus.cjs');
var encode$2 = require('../Delegation/encode.cjs');
var encode$3 = require('../RewardScore/encode.cjs');
var encode$4 = require('../RankingScore/encode.cjs');

/// autogenerated by protoc-plugin-js

function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer();

  if (obj.id) writer.bytes(1, obj.id, types.string);
  if (obj.pubKey) writer.bytes(2, obj.pubKey, types.string);
  if (obj.tmPubKey) writer.bytes(3, obj.tmPubKey, types.string);
  if (obj.ethereumAddress) writer.bytes(4, obj.ethereumAddress, types.string);
  if (obj.infoUrl) writer.bytes(5, obj.infoUrl, types.string);
  if (obj.location) writer.bytes(6, obj.location, types.string);
  if (obj.stakedByOperator) writer.bytes(7, obj.stakedByOperator, types.string);
  if (obj.stakedByDelegates) writer.bytes(8, obj.stakedByDelegates, types.string);
  if (obj.stakedTotal) writer.bytes(9, obj.stakedTotal, types.string);
  if (obj.maxIntendedStake) writer.bytes(10, obj.maxIntendedStake, types.string);
  if (obj.pendingStake) writer.bytes(11, obj.pendingStake, types.string);
  if (obj.epochData) writer.bytes(12, encode$1.encode(obj.epochData));
  if (obj.status) writer.varint(13, obj.status, NodeStatus);
  if (obj.delegations?.length)
    obj.delegations.forEach((v) => writer.bytes(14, encode$2.encode(v)));
  if (obj.rewardScore)
    writer.bytes(15, encode$3.encode(obj.rewardScore));
  if (obj.rankingScore)
    writer.bytes(16, encode$4.encode(obj.rankingScore));
  if (obj.name) writer.bytes(17, obj.name, types.string);
  if (obj.avatarUrl) writer.bytes(18, obj.avatarUrl, types.string);

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }

exports.encode = encode;
