/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.minimumQuantumBalance)
    writer.bytes(1, obj.minimumQuantumBalance, string)
  if (obj.rewardMultiplier) writer.bytes(2, obj.rewardMultiplier, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
