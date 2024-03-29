/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.settlementDataProperty)
    writer.bytes(1, obj.settlementDataProperty, string)
  if (obj.tradingTerminationProperty)
    writer.bytes(2, obj.tradingTerminationProperty, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
