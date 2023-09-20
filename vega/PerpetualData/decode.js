/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')
const { string } = require('protobuf-codec/decode/types')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  let field$fundingPayment = ''
  let field$fundingRate = ''
  let field$internalTwap = ''
  let field$externalTwap = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$fundingPayment = string(data)
        break

      case 2:
        field$fundingRate = string(data)
        break

      case 3:
        field$internalTwap = string(data)
        break

      case 4:
        field$externalTwap = string(data)
        break
    }
  }
  return {
    fundingPayment: field$fundingPayment,
    fundingRate: field$fundingRate,
    internalTwap: field$internalTwap,
    externalTwap: field$externalTwap
  }
}