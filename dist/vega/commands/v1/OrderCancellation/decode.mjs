import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let orderId = {}
  let marketId = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        orderId = data
        break
      case 2:
        marketId = data
        break
    }
  }

  return {
    orderId,
    marketId,
  }
}
