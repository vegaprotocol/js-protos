/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _google_protobuf_Value = require('./../Value/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.values?.length)
    obj.values.forEach((v) => writer.bytes(1, _google_protobuf_Value.encode(v)))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
