/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_PriceMonitoringTrigger = require('./../PriceMonitoringTrigger/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  const field$triggers = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$triggers.push(_vega_PriceMonitoringTrigger.decode(data))
        break
    }
  }
  return { triggers: field$triggers }
}
