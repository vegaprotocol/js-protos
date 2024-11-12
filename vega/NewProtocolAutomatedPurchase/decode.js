/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_NewProtocolAutomatedPurchaseChanges = require('./../NewProtocolAutomatedPurchaseChanges/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$changes = {}
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$changes = _vega_NewProtocolAutomatedPurchaseChanges.decode(data)
        break
    }
  }
  return { changes: field$changes }
}