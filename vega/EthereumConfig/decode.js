/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint32 } = require('protobuf-codec/decode/types')
const _vega_EthereumContractConfig = require('./../EthereumContractConfig/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$networkId = ''
  let field$chainId = ''
  let field$collateralBridgeContract = {}
  let field$confirmations = 0
  let field$stakingBridgeContract = {}
  let field$tokenVestingContract = {}
  let field$multisigControlContract = {}
  let field$blockTime = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$networkId = string(data)
        break

      case 2:
        field$chainId = string(data)
        break

      case 3:
        field$collateralBridgeContract =
          _vega_EthereumContractConfig.decode(data)
        break

      case 4:
        field$confirmations = uint32(data)
        break

      case 5:
        field$stakingBridgeContract = _vega_EthereumContractConfig.decode(data)
        break

      case 6:
        field$tokenVestingContract = _vega_EthereumContractConfig.decode(data)
        break

      case 7:
        field$multisigControlContract =
          _vega_EthereumContractConfig.decode(data)
        break

      case 8:
        field$blockTime = string(data)
        break
    }
  }
  return {
    networkId: field$networkId,
    chainId: field$chainId,
    collateralBridgeContract: field$collateralBridgeContract,
    confirmations: field$confirmations,
    stakingBridgeContract: field$stakingBridgeContract,
    tokenVestingContract: field$tokenVestingContract,
    multisigControlContract: field$multisigControlContract,
    blockTime: field$blockTime
  }
}
