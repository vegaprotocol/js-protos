import reader from 'protobuf-codec/decode/reader'

import * as PropertyKey from './../PropertyKey/decode.js'
import * as Condition from './../Condition/decode.js'

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let field$key = {}
  const field$conditions = []
  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        field$key = PropertyKey.decode(data)
        break

      case 2:
        field$conditions.push(Condition.decode(data))
        break
    }
  }
  return { key: field$key, conditions: field$conditions }
}
