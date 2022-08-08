import reader from "protobuf-codec/decode/reader.mjs"
import { uint64 } from "protobuf-codec/decode/types.mjs"
import * as StakeDeposited from "./../StakeDeposited/decode.mjs"
import * as StakeRemoved from "./../StakeRemoved/decode.mjs"
import * as StakeTotalSupply from "./../StakeTotalSupply/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let index = 0n
  let block = 0n
  let stakeDeposited = {}
  let stakeRemoved = {}
  let totalSupply = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        index = data
        break
      case 2:
        block = data
        break
      case 1001:
        stakeDeposited = data
        break
      case 1002:
        stakeRemoved = data
        break
      case 1003:
        totalSupply = data
        break
    }
  }

  return {
    index,
    block,
    stakeDeposited,
    stakeRemoved,
    totalSupply,
  }
}
