/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _vega_DataSourceSpecConfigurationTime = require('./../DataSourceSpecConfigurationTime/encode.js')
const _vega_DataSourceSpecConfigurationTimeTrigger = require('./../DataSourceSpecConfigurationTimeTrigger/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.source_type?.time ?? obj.time)
    writer.bytes(
      1,
      _vega_DataSourceSpecConfigurationTime.encode(
        obj.source_type?.time ?? obj.time
      )
    )
  if (obj.source_type?.timeTrigger ?? obj.timeTrigger)
    writer.bytes(
      2,
      _vega_DataSourceSpecConfigurationTimeTrigger.encode(
        obj.source_type?.timeTrigger ?? obj.timeTrigger
      )
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
