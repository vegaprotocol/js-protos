/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { bool } = require('protobuf-codec/decode/types')
const _vega_commands_v1_CreateReferralSet_Team = require('./Team/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$isTeam = false
  let field$team = null
  let field$doNotCreateReferralSet = false
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$isTeam = bool(data)
        break

      case 2:
        field$team = _vega_commands_v1_CreateReferralSet_Team.decode(data)
        break

      case 3:
        field$doNotCreateReferralSet = bool(data)
        break
    }
  }
  return {
    isTeam: field$isTeam,
    team: field$team,
    doNotCreateReferralSet: field$doNotCreateReferralSet
  }
}
