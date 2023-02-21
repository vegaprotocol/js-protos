/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { bytes, string } from 'protobuf-codec/encode/types'
import * as _vega_commands_v1_Signature from './../Signature/encode.js'
import * as _vega_commands_v1_TxVersion from './../TxVersion.js'
import * as _vega_commands_v1_ProofOfWork from './../ProofOfWork/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.inputData) writer.bytes(1, obj.inputData, bytes)
  if (obj.signature)
    writer.bytes(2, _vega_commands_v1_Signature.encode(obj.signature))
  if (obj.version) writer.varint(2000, obj.version, _vega_commands_v1_TxVersion)
  if (obj.pow) writer.bytes(3000, _vega_commands_v1_ProofOfWork.encode(obj.pow))

  if (obj.from) {
    const _o = obj.from
    if (_o.address) writer.bytes(1001, _o.address, string)
    if (_o.pubKey) writer.bytes(1002, _o.pubKey, string)
  }

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }