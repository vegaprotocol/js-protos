import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let price = {}
  let numberOfOrders = 0n
  let volume = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        price = data
        break
      case 2:
        numberOfOrders = data
        break
      case 3:
        volume = data
        break
    }
  }

  return {
    price,
    numberOfOrders,
    volume,
  }
}
