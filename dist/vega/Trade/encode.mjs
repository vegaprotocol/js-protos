import Writer from "protobuf-codec/encode/writer.mjs"
import { string, uint64, int64 } from "protobuf-codec/encode/types.mjs"
import * as Side from "./../Side.mjs"
import * as Type from "./Type.mjs"
import * as Fee from "./../Fee/encode.mjs"

export function encode(obj = {}, buf, byteOffset = 0) {
  const writer = new Writer()

  if (obj.id) writer.bytes(1, obj.id, string)
  if (obj.marketId) writer.bytes(2, obj.marketId, string)
  if (obj.price) writer.bytes(3, obj.price, string)
  if (obj.size) writer.varint(4, obj.size, uint64)
  if (obj.buyer) writer.bytes(5, obj.buyer, string)
  if (obj.seller) writer.bytes(6, obj.seller, string)
  if (obj.aggressor) writer.varint(7, obj.aggressor, Side)
  if (obj.buyOrder) writer.bytes(8, obj.buyOrder, string)
  if (obj.sellOrder) writer.bytes(9, obj.sellOrder, string)
  if (obj.timestamp) writer.varint(10, obj.timestamp, int64)
  if (obj.type) writer.varint(11, obj.type, Type)
  if (obj.buyerFee) writer.bytes(12, Fee.encode(obj.buyerFee))
  if (obj.sellerFee) writer.bytes(13, Fee.encode(obj.sellerFee))
  if (obj.buyerAuctionBatch) writer.varint(14, obj.buyerAuctionBatch, uint64)
  if (obj.sellerAuctionBatch) writer.varint(15, obj.sellerAuctionBatch, uint64)

  return writer.concat(buf, byteOffset)
}

export function encodingLength(obj) {
  throw new Error("Unimplemented")
}
