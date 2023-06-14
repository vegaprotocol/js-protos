/// autogenerated by protoc-plugin-js
import Writer from 'protobuf-codec/encode/writer'
import { uint64 } from 'protobuf-codec/encode/types'
import * as _vega_StakeDeposited from './../StakeDeposited/encode.js'
import * as _vega_StakeRemoved from './../StakeRemoved/encode.js'
import * as _vega_StakeTotalSupply from './../StakeTotalSupply/encode.js'

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.index) writer.varint(1, obj.index, uint64)
  if (obj.block) writer.varint(2, obj.block, uint64)

  if (obj.action?.stakeDeposited ?? obj.stakeDeposited)
    writer.bytes(
      1001,
      _vega_StakeDeposited.encode(
        obj.action?.stakeDeposited ?? obj.stakeDeposited
      )
    )
  if (obj.action?.stakeRemoved ?? obj.stakeRemoved)
    writer.bytes(
      1002,
      _vega_StakeRemoved.encode(obj.action?.stakeRemoved ?? obj.stakeRemoved)
    )
  if (obj.action?.totalSupply ?? obj.totalSupply)
    writer.bytes(
      1003,
      _vega_StakeTotalSupply.encode(obj.action?.totalSupply ?? obj.totalSupply)
    )

  return writer.concat(buf, byteOffset)
}

// export function encodingLength (obj) {
//   throw new Error('Unimplemented')
// }
