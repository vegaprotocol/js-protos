/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'

import * as _vega_Order from './../Order/encode.js'
import * as _vega_Trade from './../Trade/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.order) writer.bytes(1, _vega_Order.encode(obj.order))
  if (obj.trades?.length)
    obj.trades.forEach((v) => writer.bytes(2, _vega_Trade.encode(v)))
  if (obj.passiveOrdersAffected?.length)
    obj.passiveOrdersAffected.forEach((v) =>
      writer.bytes(3, _vega_Order.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }