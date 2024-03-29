/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$address = ''
  let field$deploymentBlockHeight = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$address = string(data)
        break

      case 6:
        field$deploymentBlockHeight = uint64(data)
        break
    }
  }
  return {
    address: field$address,
    deploymentBlockHeight: field$deploymentBlockHeight
  }
}
