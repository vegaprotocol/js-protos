/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_commands_v1_StopOrderSetup = require('./../StopOrderSetup/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$risesAbove = null
  let field$fallsBelow = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$risesAbove = _vega_commands_v1_StopOrderSetup.decode(data)
        break

      case 2:
        field$fallsBelow = _vega_commands_v1_StopOrderSetup.decode(data)
        break
    }
  }
  return { risesAbove: field$risesAbove, fallsBelow: field$fallsBelow }
}