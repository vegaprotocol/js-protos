/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$market = ''
  let field$short = ''
  let field$long = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$market = string(data)
        break

      case 2:
        field$short = string(data)
        break

      case 3:
        field$long = string(data)
        break
    }
  }
  return { market: field$market, short: field$short, long: field$long }
}
