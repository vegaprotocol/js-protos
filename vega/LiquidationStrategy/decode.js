/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { int64, string, uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$disposalTimeStep = 0n
  let field$disposalFraction = ''
  let field$fullDisposalSize = 0n
  let field$maxFractionConsumed = ''
  let field$disposalSlippageRange = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$disposalTimeStep = int64(data)
        break

      case 2:
        field$disposalFraction = string(data)
        break

      case 3:
        field$fullDisposalSize = uint64(data)
        break

      case 4:
        field$maxFractionConsumed = string(data)
        break

      case 5:
        field$disposalSlippageRange = string(data)
        break
    }
  }
  return {
    disposalTimeStep: field$disposalTimeStep,
    disposalFraction: field$disposalFraction,
    fullDisposalSize: field$fullDisposalSize,
    maxFractionConsumed: field$maxFractionConsumed,
    disposalSlippageRange: field$disposalSlippageRange
  }
}
