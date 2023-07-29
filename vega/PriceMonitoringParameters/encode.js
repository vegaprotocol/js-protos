/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _vega_PriceMonitoringTrigger = require('./../PriceMonitoringTrigger/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.triggers?.length)
    obj.triggers.forEach((v) =>
      writer.bytes(1, _vega_PriceMonitoringTrigger.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }