import reader from "protobuf-codec/decode/reader.mjs"
import { double } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let factorLong = 0
  let factorShort = 0
  let maxMoveUp = 0
  let minMoveDown = 0
  let probabilityOfTrading = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        factorLong = data
        break
      case 2:
        factorShort = data
        break
      case 3:
        maxMoveUp = data
        break
      case 4:
        minMoveDown = data
        break
      case 5:
        probabilityOfTrading = data
        break
    }
  }

  return {
    factorLong,
    factorShort,
    maxMoveUp,
    minMoveDown,
    probabilityOfTrading,
  }
}
