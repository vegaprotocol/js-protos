import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64 } from "protobuf-codec/encode/types.mjs"
import * as ERC20Update from "./../ERC20Update/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.name) writer.bytes(1, obj.name, string)
  if (obj.symbol) writer.bytes(2, obj.symbol, string)
  if (obj.totalSupply) writer.bytes(3, obj.totalSupply, string)
  if (obj.decimals) writer.varint(4, obj.decimals, uint64)
  if (obj.quantum) writer.bytes(5, obj.quantum, string)

  if (obj.source) {
    const _o = obj.source
    if (_o.erc20) writer.bytes(101, ERC20Update.encode(_o.erc20))
  }

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
