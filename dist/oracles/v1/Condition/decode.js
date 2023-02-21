import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'
import * as Operator from './Operator.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$operator = 0
  let field$value = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$operator = Operator.decode(data)
        break

      case 2:
        field$value = string(data)
        break
    }
  }
  return { operator: field$operator, value: field$value }
}