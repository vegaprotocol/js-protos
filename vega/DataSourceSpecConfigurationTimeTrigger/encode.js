/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _vega_data_v1_Condition = require('./../data/v1/Condition/encode.js')
const _vega_data_v1_InternalTimeTrigger = require('./../data/v1/InternalTimeTrigger/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.conditions?.length)
    obj.conditions.forEach((v) =>
      writer.bytes(1, _vega_data_v1_Condition.encode(v))
    )
  if (obj.triggers?.length)
    obj.triggers.forEach((v) =>
      writer.bytes(2, _vega_data_v1_InternalTimeTrigger.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
