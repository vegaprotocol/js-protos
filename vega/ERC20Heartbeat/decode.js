/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$contractAddress = ''
  let field$blockHeight = 0n
  let field$blockTime = 0n
  let field$sourceChainId = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$contractAddress = string(data)
        break

      case 2:
        field$blockHeight = uint64(data)
        break

      case 3:
        field$blockTime = uint64(data)
        break

      case 6:
        field$sourceChainId = string(data)
        break
    }
  }
  return {
    contractAddress: field$contractAddress,
    blockHeight: field$blockHeight,
    blockTime: field$blockTime,
    sourceChainId: field$sourceChainId
  }
}