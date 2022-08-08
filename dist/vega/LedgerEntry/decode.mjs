import reader from "protobuf-codec/decode/reader.mjs"
import { string, int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let fromAccount = {}
  let toAccount = {}
  let amount = {}
  let reference = {}
  let type = {}
  let timestamp = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        fromAccount = data
        break
      case 2:
        toAccount = data
        break
      case 3:
        amount = data
        break
      case 4:
        reference = data
        break
      case 5:
        type = data
        break
      case 6:
        timestamp = data
        break
    }
  }

  return {
    fromAccount,
    toAccount,
    amount,
    reference,
    type,
    timestamp,
  }
}
