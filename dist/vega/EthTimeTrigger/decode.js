/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$initial = null
  let field$every = null
  let field$until = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$initial = uint64(data)
        break

      case 2:
        field$every = uint64(data)
        break

      case 3:
        field$until = uint64(data)
        break
    }
  }
  return { initial: field$initial, every: field$every, until: field$until }
}
