/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string, int64 } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$maintenanceMargin = ''
  let field$searchLevel = ''
  let field$initialMargin = ''
  let field$collateralReleaseLevel = ''
  let field$partyId = ''
  let field$marketId = ''
  let field$asset = ''
  let field$timestamp = 0n
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$maintenanceMargin = string(data)
        break

      case 2:
        field$searchLevel = string(data)
        break

      case 3:
        field$initialMargin = string(data)
        break

      case 4:
        field$collateralReleaseLevel = string(data)
        break

      case 5:
        field$partyId = string(data)
        break

      case 6:
        field$marketId = string(data)
        break

      case 7:
        field$asset = string(data)
        break

      case 8:
        field$timestamp = int64(data)
        break
    }
  }
  return {
    maintenanceMargin: field$maintenanceMargin,
    searchLevel: field$searchLevel,
    initialMargin: field$initialMargin,
    collateralReleaseLevel: field$collateralReleaseLevel,
    partyId: field$partyId,
    marketId: field$marketId,
    asset: field$asset,
    timestamp: field$timestamp
  }
}
