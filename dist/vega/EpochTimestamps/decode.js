/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { int64, uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$startTime = 0n
  let field$expiryTime = 0n
  let field$endTime = 0n
  let field$firstBlock = 0n
  let field$lastBlock = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$startTime = int64(data)
        break

      case 2:
        field$expiryTime = int64(data)
        break

      case 3:
        field$endTime = int64(data)
        break

      case 4:
        field$firstBlock = uint64(data)
        break

      case 5:
        field$lastBlock = uint64(data)
        break
    }
  }
  return {
    startTime: field$startTime,
    expiryTime: field$expiryTime,
    endTime: field$endTime,
    firstBlock: field$firstBlock,
    lastBlock: field$lastBlock
  }
}
