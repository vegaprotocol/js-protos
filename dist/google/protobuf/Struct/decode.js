/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _google_protobuf_Struct_FieldsEntry from './FieldsEntry/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const field$fields = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$fields.push(_google_protobuf_Struct_FieldsEntry.decode(data))
        break
    }
  }
  return { fields: field$fields }
}
