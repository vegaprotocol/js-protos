/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint32 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$value = ''
  let field$algo = ''
  let field$version = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$value = string(data)
        break

      case 2:
        field$algo = string(data)
        break

      case 3:
        field$version = uint32(data)
        break
    }
  }
  return { value: field$value, algo: field$algo, version: field$version }
}
