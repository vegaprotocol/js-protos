/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$peakSize = 0n
  let field$minimumVisibleSize = 0n
  let field$reservedRemaining = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$peakSize = uint64(data)
        break

      case 2:
        field$minimumVisibleSize = uint64(data)
        break

      case 3:
        field$reservedRemaining = uint64(data)
        break
    }
  }
  return {
    peakSize: field$peakSize,
    minimumVisibleSize: field$minimumVisibleSize,
    reservedRemaining: field$reservedRemaining
  }
}
