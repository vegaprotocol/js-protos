import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint32, float } from "protobuf-codec/decode/types.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let stakedTotal = {}
  let totalNodes = 0
  let inactiveNodes = 0
  let validatingNodes = 0
  let uptime = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        stakedTotal = data
        break
      case 2:
        totalNodes = data
        break
      case 3:
        inactiveNodes = data
        break
      case 4:
        validatingNodes = data
        break
      case 5:
        uptime = data
        break
    }
  }

  return {
    stakedTotal,
    totalNodes,
    inactiveNodes,
    validatingNodes,
    uptime,
  }
}
