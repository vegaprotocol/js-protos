import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as PriceMonitoringParameters from "./../PriceMonitoringParameters/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let parameters = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        parameters = data
        break
    }
  }

  return {
    parameters,
  }
}
