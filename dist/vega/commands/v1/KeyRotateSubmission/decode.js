/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { uint32, uint64, string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$newPubKeyIndex = 0
  let field$targetBlock = 0n
  let field$newPubKey = ''
  let field$currentPubKeyHash = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$newPubKeyIndex = uint32(data)
        break

      case 2:
        field$targetBlock = uint64(data)
        break

      case 3:
        field$newPubKey = string(data)
        break

      case 4:
        field$currentPubKeyHash = string(data)
        break
    }
  }
  return {
    newPubKeyIndex: field$newPubKeyIndex,
    targetBlock: field$targetBlock,
    newPubKey: field$newPubKey,
    currentPubKeyHash: field$currentPubKeyHash
  }
}