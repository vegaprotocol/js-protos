/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$price = ''
  let field$numberOfOrders = 0n
  let field$volume = 0n
  let field$ammVolume = 0n
  let field$ammVolumeEstimated = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$price = string(data)
        break

      case 2:
        field$numberOfOrders = uint64(data)
        break

      case 3:
        field$volume = uint64(data)
        break

      case 4:
        field$ammVolume = uint64(data)
        break

      case 5:
        field$ammVolumeEstimated = uint64(data)
        break
    }
  }
  return {
    price: field$price,
    numberOfOrders: field$numberOfOrders,
    volume: field$volume,
    ammVolume: field$ammVolume,
    ammVolumeEstimated: field$ammVolumeEstimated
  }
}
