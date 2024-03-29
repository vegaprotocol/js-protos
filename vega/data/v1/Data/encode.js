/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, int64 } = require('protobuf-codec/encode/types')
const _vega_data_v1_Signer = require('./../Signer/encode.js')
const _vega_data_v1_Property = require('./../Property/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.signers?.length)
    obj.signers.forEach((v) => writer.bytes(1, _vega_data_v1_Signer.encode(v)))
  if (obj.data?.length)
    obj.data.forEach((v) => writer.bytes(2, _vega_data_v1_Property.encode(v)))
  if (obj.matchedSpecIds?.length)
    obj.matchedSpecIds.forEach((v) => writer.bytes(3, v, string))
  if (obj.broadcastAt) writer.varint(4, obj.broadcastAt, int64)
  if (obj.metaData?.length)
    obj.metaData.forEach((v) =>
      writer.bytes(5, _vega_data_v1_Property.encode(v))
    )
  if (obj.error) writer.bytes(6, obj.error, string)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
