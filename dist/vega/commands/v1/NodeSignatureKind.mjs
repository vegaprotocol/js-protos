import { enumerable } from "protobuf-codec/encode/types.mjs"
import { int32 as decodeEnumerable } from "protobuf-codec/decode/types.mjs"

const strings = new Map([
  [0, "NODE_SIGNATURE_KIND_UNSPECIFIED"],
  [1, "NODE_SIGNATURE_KIND_ASSET_NEW"],
  [2, "NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL"],
  [3, "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED"],
  [4, "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED"],
  [5, "NODE_SIGNATURE_KIND_ASSET_UPDATE"],
])

export const NODE_SIGNATURE_KIND_UNSPECIFIED = 0
export const NODE_SIGNATURE_KIND_ASSET_NEW = 1
export const NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL = 2
export const NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED = 3
export const NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED = 4
export const NODE_SIGNATURE_KIND_ASSET_UPDATE = 5

export function encode(value, buf, byteOffset = 0) {
  return enumerable.encode(value, buf, byteOffset)
}

export function encodingLength(value) {
  if (value <= 5) return 1
  return 5 // enumerable max value in case of unknown value
}

export function decode(varint) {
  return decodeEnumerable(varint)
}

export function string(value) {
  return strings.get(value)
}
