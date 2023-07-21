/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_EthTimeTrigger from './../EthTimeTrigger/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.trigger?.timeTrigger ?? obj.timeTrigger)
    writer.bytes(
      1,
      _vega_EthTimeTrigger.encode(obj.trigger?.timeTrigger ?? obj.timeTrigger)
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }