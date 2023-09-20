/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { uint32 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$startRank = 0
  let field$shareRatio = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$startRank = uint32(data)
        break

      case 2:
        field$shareRatio = uint32(data)
        break
    }
  }
  return { startRank: field$startRank, shareRatio: field$shareRatio }
}