/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$party = ''
  let field$equityLikeShare = ''
  let field$averageEntryValuation = ''
  let field$averageScore = ''
  let field$virtualStake = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$party = string(data)
        break

      case 2:
        field$equityLikeShare = string(data)
        break

      case 3:
        field$averageEntryValuation = string(data)
        break

      case 4:
        field$averageScore = string(data)
        break

      case 5:
        field$virtualStake = string(data)
        break
    }
  }
  return {
    party: field$party,
    equityLikeShare: field$equityLikeShare,
    averageEntryValuation: field$averageEntryValuation,
    averageScore: field$averageScore,
    virtualStake: field$virtualStake
  }
}
