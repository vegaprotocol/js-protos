import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as Type from './Type.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$name = ''
  let field$type = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$name = string(data)
        break

      case 2:
        field$type = Type.decode(data)
        break
    }
  }
  return { name: field$name, type: field$type }
}
