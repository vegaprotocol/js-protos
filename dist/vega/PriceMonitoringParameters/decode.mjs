import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as PriceMonitoringTrigger from "./../PriceMonitoringTrigger/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  const triggers = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        triggers.push(data)
        break
    }
  }

  return {
    triggers,
  }
}
