import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint32 } from "protobuf-codec/decode/types.mjs"
import * as EthereumContractConfig from "./../EthereumContractConfig/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let networkId = {}
  let chainId = {}
  let collateralBridgeContract = {}
  let confirmations = 0
  let stakingBridgeContract = {}
  let tokenVestingContract = {}
  let multisigControlContract = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        networkId = data
        break
      case 2:
        chainId = data
        break
      case 3:
        collateralBridgeContract = data
        break
      case 4:
        confirmations = data
        break
      case 5:
        stakingBridgeContract = data
        break
      case 6:
        tokenVestingContract = data
        break
      case 7:
        multisigControlContract = data
        break
    }
  }

  return {
    networkId,
    chainId,
    collateralBridgeContract,
    confirmations,
    stakingBridgeContract,
    tokenVestingContract,
    multisigControlContract,
  }
}
