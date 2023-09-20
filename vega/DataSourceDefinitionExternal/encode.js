/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _vega_DataSourceSpecConfiguration = require('./../DataSourceSpecConfiguration/encode.js')
const _vega_EthCallSpec = require('./../EthCallSpec/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.source_type?.oracle ?? obj.oracle)
    writer.bytes(
      1,
      _vega_DataSourceSpecConfiguration.encode(
        obj.source_type?.oracle ?? obj.oracle
      )
    )
  if (obj.source_type?.ethOracle ?? obj.ethOracle)
    writer.bytes(
      2,
      _vega_EthCallSpec.encode(obj.source_type?.ethOracle ?? obj.ethOracle)
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
