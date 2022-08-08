import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64, bool } from "protobuf-codec/encode/types.mjs"
import * as ERC20AssetList from "./../ERC20AssetList/encode.mjs"
import * as ERC20AssetDelist from "./../ERC20AssetDelist/encode.mjs"
import * as ERC20Deposit from "./../ERC20Deposit/encode.mjs"
import * as ERC20Withdrawal from "./../ERC20Withdrawal/encode.mjs"
import * as ERC20AssetLimitsUpdated from "./../ERC20AssetLimitsUpdated/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.index) writer.varint(1, obj.index, uint64)
  if (obj.block) writer.varint(2, obj.block, uint64)

  if (obj.action) {
    const _o = obj.action
    if (_o.assetList) writer.bytes(1001, ERC20AssetList.encode(_o.assetList))
    if (_o.assetDelist)
      writer.bytes(1002, ERC20AssetDelist.encode(_o.assetDelist))
    if (_o.deposit) writer.bytes(1003, ERC20Deposit.encode(_o.deposit))
    if (_o.withdrawal) writer.bytes(1004, ERC20Withdrawal.encode(_o.withdrawal))
    if (_o.assetLimitsUpdated)
      writer.bytes(1005, ERC20AssetLimitsUpdated.encode(_o.assetLimitsUpdated))
    if (_o.bridgeStopped) writer.varint(1006, _o.bridgeStopped, bool)
    if (_o.bridgeResumed) writer.varint(1007, _o.bridgeResumed, bool)
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
