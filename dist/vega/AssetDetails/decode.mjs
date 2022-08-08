import reader from "protobuf-codec/decode/reader.mjs"
import { string, uint64 } from "protobuf-codec/decode/types.mjs"
import * as BuiltinAsset from "./../BuiltinAsset/decode.mjs"
import * as ERC20 from "./../ERC20/decode.mjs"

export function decode(buf, byteOffset = 0, byteLength = buf.byteLength) {
  let name = {}
  let symbol = {}
  let totalSupply = {}
  let decimals = 0n
  let quantum = {}
  let builtinAsset = {}
  let erc20 = {}

  for (const [field, { data }] of reader(buf, byteOffset, byteLength)) {
    switch (field) {
      case 1:
        name = data
        break
      case 2:
        symbol = data
        break
      case 3:
        totalSupply = data
        break
      case 4:
        decimals = data
        break
      case 5:
        quantum = data
        break
      case 101:
        builtinAsset = data
        break
      case 102:
        erc20 = data
        break
    }
  }

  return {
    name,
    symbol,
    totalSupply,
    decimals,
    quantum,
    builtinAsset,
    erc20,
  }
}
