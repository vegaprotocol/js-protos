import reader from "protobuf-codec/decode/reader.mjs"
import { string } from "protobuf-codec/decode/types.mjs"
import * as KeyValueBundle from "./../KeyValueBundle/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let stateVarId = {}
  let eventId = {}
  const kvb = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        stateVarId = data
        break
      case 2:
        eventId = data
        break
      case 3:
        kvb.push(data)
        break
    }
  }

  return {
    stateVarId,
    eventId,
    kvb,
  }
}
