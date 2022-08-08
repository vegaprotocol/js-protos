import Writer from "protobuf-codec/encode/writer.mjs"
import { uint64 } from "protobuf-codec/encode/types.mjs"
import * as StakeDeposited from "./../StakeDeposited/encode.mjs"
import * as StakeRemoved from "./../StakeRemoved/encode.mjs"
import * as StakeTotalSupply from "./../StakeTotalSupply/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.index) writer.varint(1, obj.index, uint64)
  if (obj.block) writer.varint(2, obj.block, uint64)

  if (obj.action) {
    const _o = obj.action
    if (_o.stakeDeposited)
      writer.bytes(1001, StakeDeposited.encode(_o.stakeDeposited))
    if (_o.stakeRemoved)
      writer.bytes(1002, StakeRemoved.encode(_o.stakeRemoved))
    if (_o.totalSupply)
      writer.bytes(1003, StakeTotalSupply.encode(_o.totalSupply))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
