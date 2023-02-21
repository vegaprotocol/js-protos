import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'

export function encode(obj = {}, buf, byteOffset = 0) {
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
