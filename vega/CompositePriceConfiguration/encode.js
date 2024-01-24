/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, uint64 } = require('protobuf-codec/encode/types')
const _vega_CompositePriceType = require('./../CompositePriceType.js')
const _vega_DataSourceDefinition = require('./../DataSourceDefinition/encode.js')
const _vega_SpecBindingForCompositePrice = require('./../SpecBindingForCompositePrice/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.decayWeight) writer.bytes(1, obj.decayWeight, string)
  if (obj.decayPower) writer.varint(2, obj.decayPower, uint64)
  if (obj.cashAmount) writer.bytes(3, obj.cashAmount, string)
  if (obj.sourceWeights?.length)
    obj.sourceWeights.forEach((v) => writer.bytes(4, v, string))
  if (obj.sourceStalenessTolerance?.length)
    obj.sourceStalenessTolerance.forEach((v) => writer.bytes(5, v, string))
  if (obj.compositePriceType)
    writer.varint(6, obj.compositePriceType, _vega_CompositePriceType)
  if (obj.dataSourcesSpec?.length)
    obj.dataSourcesSpec.forEach((v) =>
      writer.bytes(7, _vega_DataSourceDefinition.encode(v))
    )
  if (obj.dataSourcesSpecBinding?.length)
    obj.dataSourcesSpecBinding.forEach((v) =>
      writer.bytes(8, _vega_SpecBindingForCompositePrice.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
