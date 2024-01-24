/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_EthereumL2Config = require('./../EthereumL2Config/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  const field$configs = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$configs.push(_vega_EthereumL2Config.decode(data))
        break
    }
  }
  return { configs: field$configs }
}
