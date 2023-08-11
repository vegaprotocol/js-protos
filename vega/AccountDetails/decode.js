/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')
const _vega_AccountType = require('./../AccountType.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$assetId = ''
  let field$type = _vega_AccountType.decode(0)
  let field$owner = null
  let field$marketId = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$assetId = string(data)
        break

      case 2:
        field$type = _vega_AccountType.decode(data)
        break

      case 3:
        field$owner = string(data)
        break

      case 4:
        field$marketId = string(data)
        break
    }
  }
  return {
    assetId: field$assetId,
    type: field$type,
    owner: field$owner,
    marketId: field$marketId
  }
}
