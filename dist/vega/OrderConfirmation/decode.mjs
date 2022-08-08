import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as Order from "./../Order/decode.mjs"
import * as Trade from "./../Trade/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let order = {}
  const trades = []
  const passiveOrdersAffected = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        order = data
        break
      case 2:
        trades.push(data)
        break
      case 3:
        passiveOrdersAffected.push(data)
        break
    }
  }

  return {
    order,
    trades,
    passiveOrdersAffected,
  }
}
