/// autogenerated by protoc-plugin-js
import reader from 'protobuf-codec/decode/reader'

import * as _vega_Erc20WithdrawExt from './../Erc20WithdrawExt/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$ext = null
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$ext = { erc20: _vega_Erc20WithdrawExt.decode(data) }
        break
    }
  }
  return { ext: field$ext }
}