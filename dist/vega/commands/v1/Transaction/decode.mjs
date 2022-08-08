import reader from "protobuf-codec/decode/reader.mjs"
import { bytes, string, uint32 } from "protobuf-codec/decode/types.mjs"
import * as Signature from "./../Signature/decode.mjs"
import * as ProofOfWork from "./../ProofOfWork/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let inputData = new Uint8Array(0)
  let signature = {}
  let address = {}
  let pubKey = {}
  let version = 0
  let pow = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        inputData = data
        break
      case 2:
        signature = data
        break
      case 1001:
        address = data
        break
      case 1002:
        pubKey = data
        break
      case 2000:
        version = data
        break
      case 3000:
        pow = data
        break
    }
  }

  return {
    inputData,
    signature,
    address,
    pubKey,
    version,
    pow,
  }
}
