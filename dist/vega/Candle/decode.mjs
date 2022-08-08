import reader from "protobuf-codec/decode/reader.mjs"
import { int64, string, uint64 } from "protobuf-codec/decode/types.mjs"
import * as Interval from "./../Interval.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let timestamp = 0n
  let datetime = {}
  let high = {}
  let low = {}
  let open = {}
  let close = {}
  let volume = 0n
  let interval = 0

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        timestamp = data
        break
      case 2:
        datetime = data
        break
      case 3:
        high = data
        break
      case 4:
        low = data
        break
      case 5:
        open = data
        break
      case 6:
        close = data
        break
      case 7:
        volume = data
        break
      case 8:
        interval = data
        break
    }
  }

  return {
    timestamp,
    datetime,
    high,
    low,
    open,
    close,
    volume,
    interval,
  }
}
