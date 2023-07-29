/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _vega_data_v1_PubKey = require('./../PubKey/encode.js')
const _vega_data_v1_ETHAddress = require('./../ETHAddress/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.signer?.pubKey ?? obj.pubKey)
    writer.bytes(
      1,
      _vega_data_v1_PubKey.encode(obj.signer?.pubKey ?? obj.pubKey)
    )
  if (obj.signer?.ethAddress ?? obj.ethAddress)
    writer.bytes(
      2,
      _vega_data_v1_ETHAddress.encode(obj.signer?.ethAddress ?? obj.ethAddress)
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
