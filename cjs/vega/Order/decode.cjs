'use strict';

var reader = require('protobuf-codec/decode/reader');
var types = require('protobuf-codec/decode/types');
var Side = require('../Side.cjs');
var TimeInForce = require('./TimeInForce.cjs');
var Type = require('./Type.cjs');
var Status = require('./Status.cjs');
var OrderError = require('../OrderError.cjs');
var decode$2 = require('../PeggedOrder/decode.cjs');
var decode$1 = require('../IcebergOrder/decode.cjs');

/// autogenerated by protoc-plugin-js

function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$id = '';
  let field$marketId = '';
  let field$partyId = '';
  let field$side = 0;
  let field$price = '';
  let field$size = 0n;
  let field$remaining = 0n;
  let field$timeInForce = 0;
  let field$type = 0;
  let field$createdAt = 0n;
  let field$status = 0;
  let field$expiresAt = 0n;
  let field$reference = '';
  let field$reason = null;
  let field$updatedAt = 0n;
  let field$version = 0n;
  let field$batchId = 0n;
  let field$peggedOrder = {};
  let field$liquidityProvisionId = '';
  let field$postOnly = false;
  let field$reduceOnly = false;
  let field$icebergOrder = null;
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = types.string(data);
        break

      case 2:
        field$marketId = types.string(data);
        break

      case 3:
        field$partyId = types.string(data);
        break

      case 4:
        field$side = Side.decode(data);
        break

      case 5:
        field$price = types.string(data);
        break

      case 6:
        field$size = types.uint64(data);
        break

      case 7:
        field$remaining = types.uint64(data);
        break

      case 8:
        field$timeInForce = TimeInForce.decode(data);
        break

      case 9:
        field$type = Type.decode(data);
        break

      case 10:
        field$createdAt = types.int64(data);
        break

      case 11:
        field$status = Status.decode(data);
        break

      case 12:
        field$expiresAt = types.int64(data);
        break

      case 13:
        field$reference = types.string(data);
        break

      case 14:
        field$reason = OrderError.decode(data);
        break

      case 15:
        field$updatedAt = types.int64(data);
        break

      case 16:
        field$version = types.uint64(data);
        break

      case 17:
        field$batchId = types.uint64(data);
        break

      case 18:
        field$peggedOrder = decode$2.decode(data);
        break

      case 19:
        field$liquidityProvisionId = types.string(data);
        break

      case 20:
        field$postOnly = types.bool(data);
        break

      case 21:
        field$reduceOnly = types.bool(data);
        break

      case 22:
        field$icebergOrder = decode$1.decode(data);
        break
    }
  }
  return {
    id: field$id,
    marketId: field$marketId,
    partyId: field$partyId,
    side: field$side,
    price: field$price,
    size: field$size,
    remaining: field$remaining,
    timeInForce: field$timeInForce,
    type: field$type,
    createdAt: field$createdAt,
    status: field$status,
    expiresAt: field$expiresAt,
    reference: field$reference,
    reason: field$reason,
    updatedAt: field$updatedAt,
    version: field$version,
    batchId: field$batchId,
    peggedOrder: field$peggedOrder,
    liquidityProvisionId: field$liquidityProvisionId,
    postOnly: field$postOnly,
    reduceOnly: field$reduceOnly,
    icebergOrder: field$icebergOrder
  }
}

exports.decode = decode;
