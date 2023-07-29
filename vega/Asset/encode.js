/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string } = require('protobuf-codec/encode/types')
const _vega_AssetDetails = require('./../AssetDetails/encode.js')
const _vega_Asset_Status = require('./Status.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.details) writer.bytes(2, _vega_AssetDetails.encode(obj.details))
  if (obj.status) writer.varint(3, obj.status, _vega_Asset_Status)

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }