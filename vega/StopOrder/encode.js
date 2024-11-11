/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')
const { string, int64 } = require('protobuf-codec/encode/types')
const _vega_StopOrder_ExpiryStrategy = require('./ExpiryStrategy.js')
const _vega_StopOrder_TriggerDirection = require('./TriggerDirection.js')
const _vega_StopOrder_Status = require('./Status.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.ocoLinkId) writer.bytes(2, obj.ocoLinkId, string)
  if (obj.expiresAt) writer.varint(3, obj.expiresAt, int64)
  if (obj.expiryStrategy)
    writer.varint(4, obj.expiryStrategy, _vega_StopOrder_ExpiryStrategy)
  if (obj.triggerDirection)
    writer.varint(5, obj.triggerDirection, _vega_StopOrder_TriggerDirection)
  if (obj.status) writer.varint(6, obj.status, _vega_StopOrder_Status)
  if (obj.createdAt) writer.varint(7, obj.createdAt, int64)
  if (obj.updatedAt) writer.varint(8, obj.updatedAt, int64)
  if (obj.orderId) writer.bytes(9, obj.orderId, string)
  if (obj.partyId) writer.bytes(10, obj.partyId, string)
  if (obj.marketId) writer.bytes(11, obj.marketId, string)

  if (obj.trigger?.price ?? obj.price)
    writer.bytes(100, obj.trigger?.price ?? obj.price, string)
  if (obj.trigger?.trailingPercentOffset ?? obj.trailingPercentOffset)
    writer.bytes(
      101,
      obj.trigger?.trailingPercentOffset ?? obj.trailingPercentOffset,
      string
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
