/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_data_v1_PubKey = require('./../PubKey/decode.js')
const _vega_data_v1_ETHAddress = require('./../ETHAddress/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$signer = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$signer = { pubKey: _vega_data_v1_PubKey.decode(data) }
        break

      case 2:
        field$signer = { ethAddress: _vega_data_v1_ETHAddress.decode(data) }
        break
    }
  }
  return { signer: field$signer }
}
