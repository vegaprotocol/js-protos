/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { string } from 'protobuf-codec/encode/types'
import * as _vega_UpdateFutureProduct from './../UpdateFutureProduct/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.code) writer.bytes(1, obj.code, string)

  if (obj.product?.future ?? obj.future)
    writer.bytes(
      100,
      _vega_UpdateFutureProduct.encode(obj.product?.future ?? obj.future)
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
