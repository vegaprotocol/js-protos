/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _google_protobuf_Struct_FieldsEntry = require('./FieldsEntry/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.fields?.length)
    obj.fields.forEach((v) =>
      writer.bytes(1, _google_protobuf_Struct_FieldsEntry.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
