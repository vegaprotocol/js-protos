/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, bool } = require('protobuf-codec/decode/types')
const _vega_commands_v1_UpdateReferralSet_Team = require('./Team/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$id = ''
  let field$isTeam = false
  let field$team = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$isTeam = bool(data)
        break

      case 3:
        field$team = _vega_commands_v1_UpdateReferralSet_Team.decode(data)
        break
    }
  }
  return { id: field$id, isTeam: field$isTeam, team: field$team }
}
