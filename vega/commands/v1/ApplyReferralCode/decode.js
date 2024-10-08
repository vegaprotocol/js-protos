/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, bool } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$id = ''
  let field$doNotJoinTeam = false
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$doNotJoinTeam = bool(data)
        break
    }
  }
  return { id: field$id, doNotJoinTeam: field$doNotJoinTeam }
}
