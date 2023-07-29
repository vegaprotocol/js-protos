/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_InstrumentMetadata = require('./../InstrumentMetadata/encode.js')
const _vega_Future = require('./../Future/encode.js')
const _vega_Spot = require('./../Spot/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.code) writer.bytes(2, obj.code, string)
  if (obj.name) writer.bytes(3, obj.name, string)
  if (obj.metadata)
    writer.bytes(4, _vega_InstrumentMetadata.encode(obj.metadata))

  if (obj.product?.future ?? obj.future)
    writer.bytes(100, _vega_Future.encode(obj.product?.future ?? obj.future))
  if (obj.product?.spot ?? obj.spot)
    writer.bytes(101, _vega_Spot.encode(obj.product?.spot ?? obj.spot))

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
