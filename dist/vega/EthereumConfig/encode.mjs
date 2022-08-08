import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint32 } from "protobuf-codec/encode/types.mjs"
import * as EthereumContractConfig from "./../EthereumContractConfig/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.networkId) writer.bytes(1, obj.networkId, string)
  if (obj.chainId) writer.bytes(2, obj.chainId, string)
  if (obj.collateralBridgeContract)
    writer.bytes(3, EthereumContractConfig.encode(obj.collateralBridgeContract))
  if (obj.confirmations) writer.varint(4, obj.confirmations, uint32)
  if (obj.stakingBridgeContract)
    writer.bytes(5, EthereumContractConfig.encode(obj.stakingBridgeContract))
  if (obj.tokenVestingContract)
    writer.bytes(6, EthereumContractConfig.encode(obj.tokenVestingContract))
  if (obj.multisigControlContract)
    writer.bytes(7, EthereumContractConfig.encode(obj.multisigControlContract))

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
