/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'
import { double } from 'protobuf-codec/decode/types'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$mu = 0
  let field$r = 0
  let field$sigma = 0
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$mu = double(data)
        break

      case 2:
        field$r = double(data)
        break

      case 3:
        field$sigma = double(data)
        break
    }
  }
  return { mu: field$mu, r: field$r, sigma: field$sigma }
}