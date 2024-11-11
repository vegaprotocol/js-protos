/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, bool } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$teamId = ''
  let field$enableRewards = false
  let field$name = null
  let field$teamUrl = null
  let field$avatarUrl = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$teamId = string(data)
        break

      case 2:
        field$enableRewards = bool(data)
        break

      case 3:
        field$name = string(data)
        break

      case 4:
        field$teamUrl = string(data)
        break

      case 5:
        field$avatarUrl = string(data)
        break
    }
  }
  return {
    teamId: field$teamId,
    enableRewards: field$enableRewards,
    name: field$name,
    teamUrl: field$teamUrl,
    avatarUrl: field$avatarUrl
  }
}
