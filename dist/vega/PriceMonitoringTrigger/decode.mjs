import reader from "protobuf-codec/decode/reader.mjs"
import { int64, string } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let horizon = 0n
  let probability = {}
  let auctionExtension = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        horizon = data
        break
      case 2:
        probability = data
        break
      case 3:
        auctionExtension = data
        break
    }
  }

  return {
    horizon,
    probability,
    auctionExtension,
  }
}
