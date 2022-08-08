import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64, int64 } from "protobuf-codec/encode/types.mjs"
import * as Side from "./../Side.mjs"
import * as TimeInForce from "./TimeInForce.mjs"
import * as Type from "./Type.mjs"
import * as Status from "./Status.mjs"
import * as OrderError from "./../OrderError.mjs"
import * as PeggedOrder from "./../PeggedOrder/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.marketId) writer.bytes(2, obj.marketId, string)
  if (obj.partyId) writer.bytes(3, obj.partyId, string)
  if (obj.side) writer.varint(4, obj.side, Side)
  if (obj.price) writer.bytes(5, obj.price, string)
  if (obj.size) writer.varint(6, obj.size, uint64)
  if (obj.remaining) writer.varint(7, obj.remaining, uint64)
  if (obj.timeInForce) writer.varint(8, obj.timeInForce, TimeInForce)
  if (obj.type) writer.varint(9, obj.type, Type)
  if (obj.createdAt) writer.varint(10, obj.createdAt, int64)
  if (obj.status) writer.varint(11, obj.status, Status)
  if (obj.expiresAt) writer.varint(12, obj.expiresAt, int64)
  if (obj.reference) writer.bytes(13, obj.reference, string)
  if (obj.reason) writer.varint(14, obj.reason, OrderError)
  if (obj.updatedAt) writer.varint(15, obj.updatedAt, int64)
  if (obj.version) writer.varint(16, obj.version, uint64)
  if (obj.batchId) writer.varint(17, obj.batchId, uint64)
  if (obj.peggedOrder) writer.bytes(18, PeggedOrder.encode(obj.peggedOrder))
  if (obj.liquidityProvisionId)
    writer.bytes(19, obj.liquidityProvisionId, string)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
