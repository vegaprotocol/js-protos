import Writer from "protobuf-codec/encode/writer.mjs"
import { string, int64, uint64 } from "protobuf-codec/encode/types.mjs"
import * as LiquidityOrderReference from "./../LiquidityOrderReference/encode.mjs"
import * as Status from "./Status.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.partyId) writer.bytes(2, obj.partyId, string)
  if (obj.createdAt) writer.varint(3, obj.createdAt, int64)
  if (obj.updatedAt) writer.varint(4, obj.updatedAt, int64)
  if (obj.marketId) writer.bytes(5, obj.marketId, string)
  if (obj.commitmentAmount) writer.bytes(6, obj.commitmentAmount, string)
  if (obj.fee) writer.bytes(7, obj.fee, string)
  if (obj.sells?.length)
    obj.sells.forEach((v) => writer.bytes(8, LiquidityOrderReference.encode(v)))
  if (obj.buys?.length)
    obj.buys.forEach((v) => writer.bytes(9, LiquidityOrderReference.encode(v)))
  if (obj.version) writer.varint(10, obj.version, uint64)
  if (obj.status) writer.varint(11, obj.status, Status)
  if (obj.reference) writer.bytes(12, obj.reference, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
