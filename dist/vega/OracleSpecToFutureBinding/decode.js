import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$settlementDataProperty = ''
  let field$tradingTerminationProperty = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$settlementDataProperty = string(data)
        break

      case 2:
        field$tradingTerminationProperty = string(data)
        break
    }
  }
  return {
    settlementDataProperty: field$settlementDataProperty,
    tradingTerminationProperty: field$tradingTerminationProperty
  }
}
