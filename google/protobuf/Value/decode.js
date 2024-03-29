/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { double, string, bool } = require('protobuf-codec/decode/types')
const _google_protobuf_NullValue = require('./../NullValue.js')
const _google_protobuf_Struct = require('./../Struct/decode.js')
const _google_protobuf_ListValue = require('./../ListValue/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$kind = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$kind = { nullValue: _google_protobuf_NullValue.decode(data) }
        break

      case 2:
        field$kind = { numberValue: double(data) }
        break

      case 3:
        field$kind = { stringValue: string(data) }
        break

      case 4:
        field$kind = { boolValue: bool(data) }
        break

      case 5:
        field$kind = { structValue: _google_protobuf_Struct.decode(data) }
        break

      case 6:
        field$kind = { listValue: _google_protobuf_ListValue.decode(data) }
        break
    }
  }
  return { kind: field$kind }
}
