/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _google_protobuf_Value = require('./../Value/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  const field$values = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$values.push(_google_protobuf_Value.decode(data))
        break
    }
  }
  return { values: field$values }
}
