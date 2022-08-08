import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as Trade from "./../Trade/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const trades = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        trades.push(data)
        break
    }
  }

  return {
    trades,
  }
}
