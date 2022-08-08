import reader from "protobuf-codec/decode/reader.mjs"
import { uint64, bool } from "protobuf-codec/decode/types.mjs"
import * as ERC20AssetList from "./../ERC20AssetList/decode.mjs"
import * as ERC20AssetDelist from "./../ERC20AssetDelist/decode.mjs"
import * as ERC20Deposit from "./../ERC20Deposit/decode.mjs"
import * as ERC20Withdrawal from "./../ERC20Withdrawal/decode.mjs"
import * as ERC20AssetLimitsUpdated from "./../ERC20AssetLimitsUpdated/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let index = 0n
  let block = 0n
  let assetList = {}
  let assetDelist = {}
  let deposit = {}
  let withdrawal = {}
  let assetLimitsUpdated = {}
  let bridgeStopped = false
  let bridgeResumed = false

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        index = data
        break
      case 2:
        block = data
        break
      case 1001:
        assetList = data
        break
      case 1002:
        assetDelist = data
        break
      case 1003:
        deposit = data
        break
      case 1004:
        withdrawal = data
        break
      case 1005:
        assetLimitsUpdated = data
        break
      case 1006:
        bridgeStopped = data
        break
      case 1007:
        bridgeResumed = data
        break
    }
  }

  return {
    index,
    block,
    assetList,
    assetDelist,
    deposit,
    withdrawal,
    assetLimitsUpdated,
    bridgeStopped,
    bridgeResumed,
  }
}
