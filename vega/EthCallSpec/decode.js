/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64 } = require('protobuf-codec/decode/types')
const _google_protobuf_Value = require('./../../google/protobuf/Value/decode.js')
const _vega_EthCallTrigger = require('./../EthCallTrigger/decode.js')
const _vega_data_v1_Filter = require('./../data/v1/Filter/decode.js')
const _vega_Normaliser = require('./../Normaliser/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$address = ''
  let field$abi = ''
  let field$method = ''
  const field$args = []
  let field$trigger = {}
  let field$requiredConfirmations = 0n
  const field$filters = []
  const field$normalisers = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$address = string(data)
        break

      case 2:
        field$abi = string(data)
        break

      case 3:
        field$method = string(data)
        break

      case 4:
        field$args.push(_google_protobuf_Value.decode(data))
        break

      case 5:
        field$trigger = _vega_EthCallTrigger.decode(data)
        break

      case 6:
        field$requiredConfirmations = uint64(data)
        break

      case 7:
        field$filters.push(_vega_data_v1_Filter.decode(data))
        break

      case 8:
        field$normalisers.push(_vega_Normaliser.decode(data))
        break
    }
  }
  return {
    address: field$address,
    abi: field$abi,
    method: field$method,
    args: field$args,
    trigger: field$trigger,
    requiredConfirmations: field$requiredConfirmations,
    filters: field$filters,
    normalisers: field$normalisers
  }
}
