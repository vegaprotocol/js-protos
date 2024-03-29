/// autogenerated by protoc-plugin-js
const Writer = require('protobuf-codec/encode/writer')

const _vega_LedgerEntry = require('./../LedgerEntry/encode.js')
const _vega_PostTransferBalance = require('./../PostTransferBalance/encode.js')

exports.encode = function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.entries?.length)
    obj.entries.forEach((v) => writer.bytes(1, _vega_LedgerEntry.encode(v)))
  if (obj.balances?.length)
    obj.balances.forEach((v) =>
      writer.bytes(2, _vega_PostTransferBalance.encode(v))
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
