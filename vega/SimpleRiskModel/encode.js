/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _vega_SimpleModelParams = require('./../SimpleModelParams/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.params) writer.bytes(1, _vega_SimpleModelParams.encode(obj.params))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
