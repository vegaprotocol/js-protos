import reader from "protobuf-codec/decode/reader.mjs"
import { int64 } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let deliverOn = 0n

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        deliverOn = data
        break
    }
  }

  return {
    deliverOn,
  }
}
