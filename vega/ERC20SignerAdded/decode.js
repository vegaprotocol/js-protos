/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, int64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$newSigner = ''
  let field$nonce = ''
  let field$blockTime = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$newSigner = string(data)
        break

      case 2:
        field$nonce = string(data)
        break

      case 3:
        field$blockTime = int64(data)
        break
    }
  }
  return {
    newSigner: field$newSigner,
    nonce: field$nonce,
    blockTime: field$blockTime
  }
}
