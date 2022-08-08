import Writer from "protobuf-codec/encode/writer.mjs"
import { bytes, string, uint32 } from "protobuf-codec/encode/types.mjs"
import * as Signature from "./../Signature/encode.mjs"
import * as ProofOfWork from "./../ProofOfWork/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.inputData) writer.bytes(1, obj.inputData, bytes)
  if (obj.signature) writer.bytes(2, Signature.encode(obj.signature))
  if (obj.version) writer.varint(2000, obj.version, uint32)
  if (obj.pow) writer.bytes(3000, ProofOfWork.encode(obj.pow))

  if (obj.from) {
    const _o = obj.from
    if (_o.address) writer.bytes(1001, _o.address, string)
    if (_o.pubKey) writer.bytes(1002, _o.pubKey, string)
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
