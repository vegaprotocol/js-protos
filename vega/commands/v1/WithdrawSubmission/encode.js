/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_WithdrawExt = require('./../../../WithdrawExt/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.amount) writer.bytes(1, obj.amount, string)
  if (obj.asset) writer.bytes(2, obj.asset, string)
  if (obj.ext) writer.bytes(3, _vega_WithdrawExt.encode(obj.ext))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
