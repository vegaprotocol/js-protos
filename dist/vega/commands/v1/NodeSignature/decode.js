/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string, bytes } from 'protobuf-codec/decode/types'
import * as _vega_commands_v1_NodeSignatureKind from './../NodeSignatureKind.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$id = ''
  let field$sig = new Uint8Array(0)
  let field$kind = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$id = string(data)
        break

      case 2:
        field$sig = bytes(data)
        break

      case 3:
        field$kind = _vega_commands_v1_NodeSignatureKind.decode(data)
        break
    }
  }
  return { id: field$id, sig: field$sig, kind: field$kind }
}