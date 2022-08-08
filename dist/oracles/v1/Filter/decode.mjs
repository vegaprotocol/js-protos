import reader from "protobuf-codec/decode/reader.mjs"
import {} from "protobuf-codec/decode/types.mjs"
import * as PropertyKey from "./../PropertyKey/decode.mjs"
import * as Condition from "./../Condition/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let key = {}
  const conditions = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        key = data
        break
      case 2:
        conditions.push(data)
        break
    }
  }

  return {
    key,
    conditions,
  }
}
