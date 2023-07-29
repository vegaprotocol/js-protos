/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, uint64 } = require('protobuf-codec/decode/types')
const _vega_BuiltinAsset = require('./../BuiltinAsset/decode.js')
const _vega_ERC20 = require('./../ERC20/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$name = ''
  let field$symbol = ''
  let field$decimals = 0n
  let field$quantum = ''
  let field$source = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$name = string(data)
        break

      case 2:
        field$symbol = string(data)
        break

      case 4:
        field$decimals = uint64(data)
        break

      case 5:
        field$quantum = string(data)
        break

      case 101:
        field$source = { builtinAsset: _vega_BuiltinAsset.decode(data) }
        break

      case 102:
        field$source = { erc20: _vega_ERC20.decode(data) }
        break
    }
  }
  return {
    name: field$name,
    symbol: field$symbol,
    decimals: field$decimals,
    quantum: field$quantum,
    source: field$source
  }
}