import reader from "protobuf-codec/decode/reader.mjs"
import { uint64 } from "protobuf-codec/decode/types.mjs"
import * as EpochTimestamps from "./../EpochTimestamps/decode.mjs"
import * as Node from "./../Node/decode.mjs"
import * as Delegation from "./../Delegation/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let seq = 0n
  let timestamps = {}
  const validators = []
  const delegations = []

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        seq = data
        break
      case 2:
        timestamps = data
        break
      case 3:
        validators.push(data)
        break
      case 4:
        delegations.push(data)
        break
    }
  }

  return {
    seq,
    timestamps,
    validators,
    delegations,
  }
}
