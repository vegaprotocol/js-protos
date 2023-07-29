/// autogenerated by protoc-plugin-js
const reader = require('protobuf-codec/decode/reader')

const _vega_commands_v1_OrderCancellation = require('./../OrderCancellation/decode.js')
const _vega_commands_v1_OrderAmendment = require('./../OrderAmendment/decode.js')
const _vega_commands_v1_OrderSubmission = require('./../OrderSubmission/decode.js')
const _vega_commands_v1_StopOrdersCancellation = require('./../StopOrdersCancellation/decode.js')
const _vega_commands_v1_StopOrdersSubmission = require('./../StopOrdersSubmission/decode.js')

exports.decode = function decode(
  buf,
  byteOffset = 0,
  byteLength = buf.byteLength
) {
  const field$cancellations = []
  const field$amendments = []
  const field$submissions = []
  const field$stopOrdersCancellation = []
  const field$stopOrdersSubmission = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$cancellations.push(
          _vega_commands_v1_OrderCancellation.decode(data)
        )
        break

      case 2:
        field$amendments.push(_vega_commands_v1_OrderAmendment.decode(data))
        break

      case 3:
        field$submissions.push(_vega_commands_v1_OrderSubmission.decode(data))
        break

      case 4:
        field$stopOrdersCancellation.push(
          _vega_commands_v1_StopOrdersCancellation.decode(data)
        )
        break

      case 5:
        field$stopOrdersSubmission.push(
          _vega_commands_v1_StopOrdersSubmission.decode(data)
        )
        break
    }
  }
  return {
    cancellations: field$cancellations,
    amendments: field$amendments,
    submissions: field$submissions,
    stopOrdersCancellation: field$stopOrdersCancellation,
    stopOrdersSubmission: field$stopOrdersSubmission
  }
}