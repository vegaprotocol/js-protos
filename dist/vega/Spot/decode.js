/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { string } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$baseAsset = ''
  let field$quoteAsset = ''
  let field$name = ''
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$baseAsset = string(data)
        break

      case 2:
        field$quoteAsset = string(data)
        break

      case 3:
        field$name = string(data)
        break
    }
  }
  return {
    baseAsset: field$baseAsset,
    quoteAsset: field$quoteAsset,
    name: field$name
  }
}