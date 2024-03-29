/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$tid = ''
  let field$nonce = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$tid = string(data)
        break

      case 2:
        field$nonce = uint64(data)
        break
    }
  }
  return { tid: field$tid, nonce: field$nonce }
}
