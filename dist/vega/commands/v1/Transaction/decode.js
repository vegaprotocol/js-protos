/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { bytes, string } = require('protobuf-codec/decode/types')
const _vega_commands_v1_Signature = require('./../Signature/decode.js')
const _vega_commands_v1_TxVersion = require('./../TxVersion.js')
const _vega_commands_v1_ProofOfWork = require('./../ProofOfWork/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$inputData = new Uint8Array(0)
  let field$signature = {}
  let field$version = 0
  let field$pow = {}
  let field$from = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$inputData = bytes(data)
        break

      case 2:
        field$signature = _vega_commands_v1_Signature.decode(data)
        break

      case 1001:
        field$from = { address: string(data) }
        break

      case 1002:
        field$from = { pubKey: string(data) }
        break

      case 2000:
        field$version = _vega_commands_v1_TxVersion.decode(data)
        break

      case 3000:
        field$pow = _vega_commands_v1_ProofOfWork.decode(data)
        break
    }
  }
  return {
    inputData: field$inputData,
    signature: field$signature,
    version: field$version,
    pow: field$pow,
    from: field$from
  }
}
